import React, { Fragment, useEffect, useState } from 'react'
import { Image, View, ActivityIndicator, Platform } from 'react-native'
import { Button } from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'
import { v4 as uuidv4 } from 'uuid'
//import firebase from 'firebase'
//require('firebase/functions')
import { pokemonList } from './PokemonList'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type ImagePickerResult = {
    cancelled: boolean
    uri?: string
}

type Props = {
    route: RouteProp<RootStackParamList, 'Photo'>
    navigation: StackNavigationProp<RootStackParamList, 'Photo'>
}

const PhotoScreen = ({ route, navigation }: Props) => {
    const [image, setImage] = useState('')

    useEffect(() => {
        ;(async () => {
            if (Platform.OS !== 'web') {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert(
                        'Sorry, we need camera roll permissions to make this work!',
                    )
                }
            }
        })()
    }, [])

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
    const analyseAndRedirect = async () => {
        /* const fileUri = await uploadAsFile(image)
        const result = await analyseImage(fileUri)
        navigation.navigate('Details', {
            selectedPokemon: pokemonList.filter(pkmn => pkmn.name === result)[0],
        })
        */
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

/*
export default class PhotoScreen extends Component {
    state = {
        image: null,
    }
    willFocus = this.props.navigation.addListener('willFocus', payload => {
        this.setState({ image: null })
    })

    render() {
        let { image } = this.state

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {!image && (
                    <Fragment>
                        <Button
                            large
                            rounded
                            icon={{ name: 'photo-library' }}
                            backgroundColor="#23a0f5"
                            title="Choose the image from your library"
                            onPress={this._pickImage}
                            style={{ padding: 10 }}
                        />
                        <Button
                            large
                            rounded
                            icon={{ name: 'squirrel', type: 'octicon' }}
                            backgroundColor="#ff6126"
                            title="Or take a picture"
                            onPress={this._capturePhoto}
                            style={{ padding: 10 }}
                        />
                    </Fragment>
                )}
                {image && (
                    <Fragment>
                        <Image
                            source={{ uri: image }}
                            style={{ width: 200, height: 200 }}
                        />
                        <ActivityIndicator size="small" color="#f4511e" />
                    </Fragment>
                )}
            </View>
        )
    }

    _uploadAsFile = async uri => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()
            xhr.onload = function() {
                resolve(xhr.response)
            }
            xhr.onerror = function(e) {
                reject(new TypeError('Network request failed'))
            }
            xhr.responseType = 'blob'
            xhr.open('GET', uri, true)
            xhr.send(null)
        })

        const ref = firebase
            .storage()
            .ref()
            .child(uuidv4())
        const snapshot = await ref.put(blob)
        blob.close()
        return await snapshot.ref.getDownloadURL()
    }

    _analyseImage = async uri => {
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

    _analyseAndRedirect = async () => {
        const fileUri = await this._uploadAsFile(this.state.image)
        const result = await this._analyseImage(fileUri)
        this.props.navigation.navigate('Details', {
            pokemon: pokemonList.filter(pkmn => pkmn.name === result)[0],
        })
    }

    _pickImage = async () => {
        try {
            const res = await Promise.all([
                Permissions.askAsync(Permissions.CAMERA),
                Permissions.askAsync(Permissions.CAMERA_ROLL),
            ])
            if (res.some(o => o.status === 'granted')) {
                let result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                })
                if (!result.cancelled) {
                    this.setState({ image: result.uri })
                    this._analyseAndRedirect()
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    _capturePhoto = async () => {
        try {
            const res = await Promise.all([
                Permissions.askAsync(Permissions.CAMERA),
                Permissions.askAsync(Permissions.CAMERA_ROLL),
            ])
            if (res.some(o => o.status === 'granted')) {
                let result = await ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                })
                if (!result.cancelled) {
                    this.setState({ image: result.uri })
                    this._analyseAndRedirect()
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}*/
