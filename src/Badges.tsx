import React from 'react'
import { View } from 'react-native'
import { Badge, Text } from 'react-native-elements'
import { colorMap } from './PokemonList'

type BadgesProps = {
    types: PokemonType[]
}

export const Badges = ({ types }: BadgesProps) => (
    <View
        style={{
            flexDirection: 'row',
        }}
    >
        {types.map((type) => (
            <Badge
                key={type}
                containerStyle={{
                    backgroundColor: colorMap[type] ? colorMap[type] : 'white',
                }}
            >
                <Text style={{ textAlign: 'center' }}>{type}</Text>
            </Badge>
        ))}
    </View>
)
