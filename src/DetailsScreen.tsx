import React, { Component, Fragment, useEffect } from 'react'
import { Image, View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-elements'
import axios from 'axios'
import { Badges } from './Badges'
import { useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'

const defaultPokemon: Pokemon = {
    id: 201,
    name: 'unown',
    types: ['psychic'],
    image:
        'https://firebasestorage.googleapis.com/v0/b/pokemon-ts.appspot.com/o/sprites%2F201.png?alt=media',
    description: 'We have not been able to find your pokemon',
}

const fetchPokemonData = async (id: number) => {
    const pokemonDetails = await axios(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
    )
    return pokemonDetails.data.flavor_text_entries
        .filter(
            (entry: PokemonApi) =>
                entry.language.name === 'en' &&
                entry.version.url === 'https://pokeapi.co/api/v2/version/1/',
        )
        .map((entry: PokemonApi) => entry.flavor_text)[0]
        .replace(/\s+/g, ' ')
}

const DetailsScreen = ({
    route,
}: StackScreenProps<RootStackParamList, 'Details'>) => {
    const { selectedPokemon } = route.params

    const [isReady, setIsReady] = useState(false)
    const [pokemon, setPokemon] = useState({ ...selectedPokemon })

    useEffect(() => {
        fetchPokemonData(selectedPokemon.id)
            .then((description) =>
                setPokemon({
                    ...pokemon,
                    ...{
                        uri: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
                        description: description,
                    },
                }),
            )
            .catch((err) => {
                console.error('unable to fetch data from pokemon api, ', err)
                setPokemon({
                    ...defaultPokemon,
                })
            })
            .finally(() => {
                setIsReady(true)
            })
    }, [])

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
            }}
        >
            {isReady ? (
                <Fragment>
                    {pokemon.uri ? (
                        <Image
                            style={{ width: 250, height: 250 }}
                            source={{ uri: pokemon.uri }}
                            resizeMode="contain"
                        />
                    ) : (
                        <Image source={{ uri: pokemon.image }} />
                    )}
                    <Text h1 style={{ textTransform: 'capitalize' }}>
                        {pokemon.name}
                    </Text>
                    <Text h4 style={{ textAlign: 'center' }}>
                        {pokemon.description}
                    </Text>
                    <Badges types={pokemon.types} />
                </Fragment>
            ) : (
                <ActivityIndicator size="small" color="#f4511e" />
            )}
        </View>
    )
}

export default DetailsScreen
