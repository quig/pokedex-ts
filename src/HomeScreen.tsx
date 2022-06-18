import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, SearchBar, Avatar } from 'react-native-elements'
import { pokemonList } from './PokemonList'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

const FIREBASE_STORAGE =
    'https://firebasestorage.googleapis.com/v0/b/pokemon-ts.appspot.com/o/sprites%2F<id>.png?alt=media'

type Props = {
    route: RouteProp<RootStackParamList, 'Home'>
    navigation: StackNavigationProp<RootStackParamList, 'Home'>
}

const HomeScreen = ({ navigation }: Props) => {
    const [pokeList, setPokeList] = useState(pokemonList)
    const [search, setSearch] = useState('')

    const searchFilterFunction = (text: string) => {
        const filteredList = pokemonList.filter((item) => {
            const name = item.name.toUpperCase()
            const input = text.toUpperCase()
            return name.indexOf(input) > -1
        })
        setPokeList(filteredList)
        setSearch(text)
    }
    return (
        <View>
            <SearchBar
                placeholder="Search"
                lightTheme
                onChangeText={(text) => searchFilterFunction(text)}
                autoCorrect={false}
                value={search}
                containerStyle={{ backgroundColor: '#fff' }}
            />
            {pokeList.map((pokemon) => (
                <ListItem
                    key={pokemon.id}
                    bottomDivider
                    onPress={() =>
                        navigation.navigate('Details', {
                            selectedPokemon: pokemon,
                        })
                    }
                >
                    <Avatar
                        source={{
                            uri: FIREBASE_STORAGE.replace(
                                '<id>',
                                pokemon.id.toString(),
                            ),
                        }}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{pokemon.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            ))}
        </View>
    )
}

export default HomeScreen
