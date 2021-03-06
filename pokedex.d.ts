type Pokemon = {
    id: number,
    name: string,
    types: Array<PokemonType>,
    image: any,
}

type PokemonType = | 'fire' | 'water' | 'grass' | 'electric' | 'flying' | 'normal' | 'psychic' | 'ice' | 'bug' | 'rock' | 'ground' | 'fairy' | 'poison' | 'fighting' | 'ghost' | 'steel' | 'dark' | 'dragon'

type PokemonColorMap = {
    [key in PokemonType]: string
}


type RootStackParamList = {
    Home: undefined;
    Details: { pokemon: Pokemon };
    Photo: undefined;
}
