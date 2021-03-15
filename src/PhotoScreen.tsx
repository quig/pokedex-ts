import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as ImagePicker from 'expo-image-picker'
import firebase from 'firebase/app'
import 'firebase/storage'
import React, { Fragment, useEffect, useState } from 'react'
import { ActivityIndicator, Image, Platform, View } from 'react-native'
import { Button } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { v4 as uuidv4 } from 'uuid'
import { pokemonList } from './PokemonList'

type ImagePickerResult = {
    cancelled: boolean
    uri?: string
}

type Props = {
    route: RouteProp<RootStackParamList, 'Photo'>
    navigation: StackNavigationProp<RootStackParamList, 'Photo'>
}

const PhotoScreen = ({ navigation }: Props) => {
    const [image, setImage] = useState('')

    useEffect(() => {
        ;(async () => {
            if (Platform.OS !== 'web') {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions')
                    navigation.goBack()
                }
            }
        })()
    })

    const pickImage = async () => {
        let {
            cancelled,
            uri,
        }: ImagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!cancelled) {
            setImage(uri ?? '')
            analyseAndRedirect()
        }
    }

    const uploadAsFile = async (uri: string) => {
        const blob = await urlToBlob(uri)
        const ref = firebase.storage().ref().child(uuidv4())
        const snapshot = await ref.put(blob)
        return await snapshot.ref.getDownloadURL()
    }
    const analyseAndRedirect = async () => {
        const fileUri = await uploadAsFile(image)
        const result = await analyseImage(fileUri)
        navigation.navigate('Details', {
            selectedPokemon: pokemonList.filter(
                (pkmn) => pkmn.name === result,
            )[0],
        })
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
            }}
        >
            {image ? (
                <Fragment>
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                    />
                    <ActivityIndicator size="small" color="#f4511e" />
                </Fragment>
            ) : (
                <Fragment>
                    <Button
                        icon={
                            <FontAwesome5 name="cat" size={15} color="white" />
                        }
                        title=" Pick an image"
                        onPress={pickImage}
                        style={{ padding: 10 }}
                    />
                </Fragment>
            )}
        </View>
    )
}
export default PhotoScreen

// thanks @sjchmiela https://github.com/expo/expo/issues/2402#issuecomment-443726662  👊
function urlToBlob(uri: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function () {
            reject(new TypeError('Network request failed'))
        }
        xhr.responseType = 'blob'
        xhr.open('GET', uri, true)
        xhr.send(null)
    })
}

async function analyseImage(uri: string) {
    var addMessage = firebase
        .functions()
        .httpsCallable('analysePokemonHttp')
    try {
        const {
            data: { guess: pokemon_guessed },
        } = await addMessage({ uri: uri })
        return pokemon_guessed ? pokemon_guessed : 'unown'
    } catch (error) {
        console.log(error)
    }
}
