type Pokemon = {
    id: number
    name: string
    types: Array<PokemonType>
    image: any
    description?: string
    uri?: string
}

type PokemonType =
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'flying'
    | 'normal'
    | 'psychic'
    | 'ice'
    | 'bug'
    | 'rock'
    | 'ground'
    | 'fairy'
    | 'poison'
    | 'fighting'
    | 'ghost'
    | 'steel'
    | 'dark'
    | 'dragon'

type PokemonColorMap = {
    [key in PokemonType]: string
}

type PokemonApi = {
    language: {
        name: string
    }
    version: {
        url: string
    }
    flavor_text: Array<string>
}

type RootStackParamList = {
    Home: undefined
    Details: { selectedPokemon: Pokemon }
    Photo: undefined
}
