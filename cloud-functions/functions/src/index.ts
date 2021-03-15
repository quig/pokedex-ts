import * as functions from 'firebase-functions'
import vision from '@google-cloud/vision'
import { pokemonList } from './pokemon.list'

const client = new vision.ImageAnnotatorClient()

exports.analysePokemonHttp = functions.region('europe-west1').https.onCall(async (data) => {
    try {
        const uri = data.uri
        const [result] = await client.webDetection(uri)
        const webDetection = result.webDetection
        if (webDetection?.bestGuessLabels?.length) {
            console.log(
                `Best guess labels found: ${webDetection?.bestGuessLabels?.length}`,
            )

            webDetection.bestGuessLabels.forEach((bestGuess) =>
                bestGuess.label &&
                    pokemonList.includes(bestGuess.label.toLowerCase())
                    ?
                    { guess: bestGuess.label.toLowerCase() }
                    : { guess: 'unown' }
            )
        }
    } catch (err) {
        throw new functions.https.HttpsError(
            'not-found',
            'Error while fetching information about the pokemon',
            err,
        )
    }
})