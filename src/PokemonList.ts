export const colorMap: PokemonColorMap = {
    fire: '#ff4d26',
    water: '#3aa4ff',
    grass: '#82d35f',
    electric: '#ffd33a',
    flying: '#93a4ff',
    normal: '#b3b3a3',
    psychic: '#ff60a3',
    ice: '#71d2ff',
    bug: '#b3c326',
    rock: '#c3b371',
    ground: '#e1c35f',
    fairy: '#f0a3f0',
    poison: '#b35fa3',
    fighting: '#c3604d',
    ghost: '#7171c3',
    steel: '#b3b3c3',
    dark: '#825f4d',
    dragon: '#8271f0',
}

export const pokemonList: Array<Pokemon> = [
    {
        id: 1,
        name: 'bulbasaur',
        types: ['poison', 'grass']
    },
    {
        id: 2,
        name: 'ivysaur',
        types: ['poison', 'grass']
    },
    {
        id: 3,
        name: 'venusaur',
        types: ['poison', 'grass']
    },
    {
        id: 4,
        name: 'charmander',
        types: ['fire']
    },
    {
        id: 5,
        name: 'charmeleon',
        types: ['fire']
    },
    {
        id: 6,
        name: 'charizard',
        types: ['flying', 'fire']
    },
    {
        id: 7,
        name: 'squirtle',
        types: ['water']
    },
    {
        id: 8,
        name: 'wartortle',
        types: ['water']
    },
    {
        id: 9,
        name: 'blastoise',
        types: ['water']
    },
    {
        id: 10,
        name: 'caterpie',
        types: ['bug']
    },
    {
        id: 11,
        name: 'metapod',
        types: ['bug']
    },
    {
        id: 12,
        name: 'butterfree',
        types: ['flying', 'bug']
    },
    {
        id: 13,
        name: 'weedle',
        types: ['poison', 'bug']
    },
    {
        id: 14,
        name: 'kakuna',
        types: ['poison', 'bug']
    },
    {
        id: 15,
        name: 'beedrill',
        types: ['poison', 'bug']
    },
    {
        id: 16,
        name: 'pidgey',
        types: ['flying', 'normal']
    },
    {
        id: 17,
        name: 'pidgeotto',
        types: ['flying', 'normal']
    },
    {
        id: 18,
        name: 'pidgeot',
        types: ['flying', 'normal']
    },
    {
        id: 19,
        name: 'rattata',
        types: ['normal']
    },
    {
        id: 20,
        name: 'raticate',
        types: ['normal']
    },
    {
        id: 21,
        name: 'spearow',
        types: ['flying', 'normal']
    },
    {
        id: 22,
        name: 'fearow',
        types: ['flying', 'normal']
    },
    {
        id: 23,
        name: 'ekans',
        types: ['poison']
    },
    {
        id: 24,
        name: 'arbok',
        types: ['poison']
    },
    {
        id: 25,
        name: 'pikachu',
        types: ['electric']
    },
    {
        id: 26,
        name: 'raichu',
        types: ['electric']
    },
    {
        id: 27,
        name: 'sandshrew',
        types: ['ground']
    },
    {
        id: 28,
        name: 'sandslash',
        types: ['ground']
    },
    {
        id: 29,
        name: 'nidoran-f',
        types: ['poison']
    },
    {
        id: 30,
        name: 'nidorina',
        types: ['poison']
    },
    {
        id: 31,
        name: 'nidoqueen',
        types: ['ground', 'poison']
    },
    {
        id: 32,
        name: 'nidoran-m',
        types: ['poison']
    },
    {
        id: 33,
        name: 'nidorino',
        types: ['poison']
    },
    {
        id: 34,
        name: 'nidoking',
        types: ['ground', 'poison']
    },
    {
        id: 35,
        name: 'clefairy',
        types: ['fairy']
    },
    {
        id: 36,
        name: 'clefable',
        types: ['fairy']
    },
    {
        id: 37,
        name: 'vulpix',
        types: ['fire']
    },
    {
        id: 38,
        name: 'ninetales',
        types: ['fire']
    },
    {
        id: 39,
        name: 'jigglypuff',
        types: ['fairy', 'normal']
    },
    {
        id: 40,
        name: 'wigglytuff',
        types: ['fairy', 'normal']
    },
    {
        id: 41,
        name: 'zubat',
        types: ['flying', 'poison']
    },
    {
        id: 42,
        name: 'golbat',
        types: ['flying', 'poison']
    },
    {
        id: 43,
        name: 'oddish',
        types: ['poison', 'grass']
    },
    {
        id: 44,
        name: 'gloom',
        types: ['poison', 'grass']
    },
    {
        id: 45,
        name: 'vileplume',
        types: ['grass', 'poison']
    },
    {
        id: 46,
        name: 'paras',
        types: ['grass', 'bug']
    },
    {
        id: 47,
        name: 'parasect',
        types: ['grass', 'bug']
    },
    {
        id: 48,
        name: 'venonat',
        types: ['poison', 'bug']
    },
    {
        id: 49,
        name: 'venomoth',
        types: ['poison', 'bug']
    },
    {
        id: 50,
        name: 'diglett',
        types: ['ground']
    },
    {
        id: 51,
        name: 'dugtrio',
        types: ['ground']
    },
    {
        id: 52,
        name: 'meowth',
        types: ['normal']
    },
    {
        id: 53,
        name: 'persian',
        types: ['normal']
    },
    {
        id: 54,
        name: 'psyduck',
        types: ['water']
    },
    {
        id: 55,
        name: 'golduck',
        types: ['water']
    },
    {
        id: 56,
        name: 'mankey',
        types: ['fighting']
    },
    {
        id: 57,
        name: 'primeape',
        types: ['fighting']
    },
    {
        id: 58,
        name: 'growlithe',
        types: ['fire']
    },
    {
        id: 59,
        name: 'arcanine',
        types: ['fire']
    },
    {
        id: 60,
        name: 'poliwag',
        types: ['water']
    },
    {
        id: 61,
        name: 'poliwhirl',
        types: ['water']
    },
    {
        id: 62,
        name: 'poliwrath',
        types: ['fighting', 'water']
    },
    {
        id: 63,
        name: 'abra',
        types: ['psychic']
    },
    {
        id: 64,
        name: 'kadabra',
        types: ['psychic']
    },
    {
        id: 65,
        name: 'alakazam',
        types: ['psychic']
    },
    {
        id: 66,
        name: 'machop',
        types: ['fighting']
    },
    {
        id: 67,
        name: 'machoke',
        types: ['fighting']
    },
    {
        id: 68,
        name: 'machamp',
        types: ['fighting']
    },
    {
        id: 69,
        name: 'bellsprout',
        types: ['poison', 'grass']
    },
    {
        id: 70,
        name: 'weepinbell',
        types: ['poison', 'grass']
    },
    {
        id: 71,
        name: 'victreebel',
        types: ['poison', 'grass']
    },
    {
        id: 72,
        name: 'tentacool',
        types: ['poison', 'water']
    },
    {
        id: 73,
        name: 'tentacruel',
        types: ['poison', 'water']
    },
    {
        id: 74,
        name: 'geodude',
        types: ['ground', 'rock']
    },
    {
        id: 75,
        name: 'graveler',
        types: ['ground', 'rock']
    },
    {
        id: 76,
        name: 'golem',
        types: ['ground', 'rock']
    },
    {
        id: 77,
        name: 'ponyta',
        types: ['fire']
    },
    {
        id: 78,
        name: 'rapidash',
        types: ['fire']
    },
    {
        id: 79,
        name: 'slowpoke',
        types: ['psychic', 'water']
    },
    {
        id: 80,
        name: 'slowbro',
        types: ['psychic', 'water']
    },
    {
        id: 81,
        name: 'magnemite',
        types: ['steel', 'electric']
    },
    {
        id: 82,
        name: 'magneton',
        types: ['steel', 'electric']
    },
    {
        id: 83,
        name: 'farfetchd',
        types: ['flying', 'normal']
    },
    {
        id: 84,
        name: 'doduo',
        types: ['flying', 'normal']
    },
    {
        id: 85,
        name: 'dodrio',
        types: ['flying', 'normal']
    },
    {
        id: 86,
        name: 'seel',
        types: ['water']
    },
    {
        id: 87,
        name: 'dewgong',
        types: ['ice', 'water']
    },
    {
        id: 88,
        name: 'grimer',
        types: ['poison']
    },
    {
        id: 89,
        name: 'muk',
        types: ['poison']
    },
    {
        id: 90,
        name: 'shellder',
        types: ['water']
    },
    {
        id: 91,
        name: 'cloyster',
        types: ['ice', 'water']
    },
    {
        id: 92,
        name: 'gastly',
        types: ['poison', 'ghost']
    },
    {
        id: 93,
        name: 'haunter',
        types: ['poison', 'ghost']
    },
    {
        id: 94,
        name: 'gengar',
        types: ['poison', 'ghost']
    },
    {
        id: 95,
        name: 'onix',
        types: ['ground', 'rock']
    },
    {
        id: 96,
        name: 'drowzee',
        types: ['psychic']
    },
    {
        id: 97,
        name: 'hypno',
        types: ['psychic']
    },
    {
        id: 98,
        name: 'krabby',
        types: ['water']
    },
    {
        id: 99,
        name: 'kingler',
        types: ['water']
    },
    {
        id: 100,
        name: 'voltorb',
        types: ['electric']
    },
    {
        id: 101,
        name: 'electrode',
        types: ['electric']
    },
    {
        id: 102,
        name: 'exeggcute',
        types: ['psychic', 'grass']
    },
    {
        id: 103,
        name: 'exeggutor',
        types: ['psychic', 'grass']
    },
    {
        id: 104,
        name: 'cubone',
        types: ['ground']
    },
    {
        id: 105,
        name: 'marowak',
        types: ['ground']
    },
    {
        id: 106,
        name: 'hitmonlee',
        types: ['fighting']
    },
    {
        id: 107,
        name: 'hitmonchan',
        types: ['fighting']
    },
    {
        id: 108,
        name: 'lickitung',
        types: ['normal']
    },
    {
        id: 109,
        name: 'koffing',
        types: ['poison']
    },
    {
        id: 110,
        name: 'weezing',
        types: ['poison']
    },
    {
        id: 111,
        name: 'rhyhorn',
        types: ['rock', 'ground']
    },
    {
        id: 112,
        name: 'rhydon',
        types: ['rock', 'ground']
    },
    {
        id: 113,
        name: 'chansey',
        types: ['normal']
    },
    {
        id: 114,
        name: 'tangela',
        types: ['grass']
    },
    {
        id: 115,
        name: 'kangaskhan',
        types: ['normal']
    },
    {
        id: 116,
        name: 'horsea',
        types: ['water']
    },
    {
        id: 117,
        name: 'seadra',
        types: ['water']
    },
    {
        id: 118,
        name: 'goldeen',
        types: ['water']
    },
    {
        id: 119,
        name: 'seaking',
        types: ['water']
    },
    {
        id: 120,
        name: 'staryu',
        types: ['water']
    },
    {
        id: 121,
        name: 'starmie',
        types: ['psychic', 'water']
    },
    {
        id: 122,
        name: 'mr-mime',
        types: ['fairy', 'psychic']
    },
    {
        id: 123,
        name: 'scyther',
        types: ['flying', 'bug']
    },
    {
        id: 124,
        name: 'jynx',
        types: ['psychic', 'ice']
    },
    {
        id: 125,
        name: 'electabuzz',
        types: ['electric']
    },
    {
        id: 126,
        name: 'magmar',
        types: ['fire']
    },
    {
        id: 127,
        name: 'pinsir',
        types: ['bug']
    },
    {
        id: 128,
        name: 'tauros',
        types: ['normal']
    },
    {
        id: 129,
        name: 'magikarp',
        types: ['water']
    },
    {
        id: 130,
        name: 'gyarados',
        types: ['flying', 'water']
    },
    {
        id: 131,
        name: 'lapras',
        types: ['ice', 'water']
    },
    {
        id: 132,
        name: 'ditto',
        types: ['normal']
    },
    {
        id: 133,
        name: 'eevee',
        types: ['normal']
    },
    {
        id: 134,
        name: 'vaporeon',
        types: ['water']
    },
    {
        id: 135,
        name: 'jolteon',
        types: ['electric']
    },
    {
        id: 136,
        name: 'flareon',
        types: ['fire']
    },
    {
        id: 137,
        name: 'porygon',
        types: ['normal']
    },
    {
        id: 138,
        name: 'omanyte',
        types: ['water', 'rock']
    },
    {
        id: 139,
        name: 'omastar',
        types: ['water', 'rock']
    },
    {
        id: 140,
        name: 'kabuto',
        types: ['water', 'rock']
    },
    {
        id: 141,
        name: 'kabutops',
        types: ['water', 'rock']
    },
    {
        id: 142,
        name: 'aerodactyl',
        types: ['flying', 'rock']
    },
    {
        id: 143,
        name: 'snorlax',
        types: ['normal']
    },
    {
        id: 144,
        name: 'articuno',
        types: ['flying', 'ice']
    },
    {
        id: 145,
        name: 'zapdos',
        types: ['flying', 'electric']
    },
    {
        id: 146,
        name: 'moltres',
        types: ['flying', 'fire']
    },
    {
        id: 147,
        name: 'dratini',
        types: ['dragon']
    },
    {
        id: 148,
        name: 'dragonair',
        types: ['dragon']
    },
    {
        id: 149,
        name: 'dragonite',
        types: ['flying', 'dragon']
    },
    {
        id: 150,
        name: 'mewtwo',
        types: ['psychic']
    },
    {
        id: 151,
        name: 'mew',
        types: ['psychic']
    },
    {
        id: 201,
        name: 'unown',
        types: ['?']
    },
]
