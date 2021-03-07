import React from 'react'
import HomeScreen from './src/HomeScreen'
import DetailsScreen from './src/DetailsScreen'
import PhotoScreen from './src/PhotoScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//import firebase from 'firebase'
//import { FirebaseConfig } from './firebase.config'
//require('firebase/functions')

const Stack = createStackNavigator<RootStackParamList>()


const App = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Pokedex' }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
            {/*<Stack.Screen name="Photo" component={PhotoScreen} />*/}
        </Stack.Navigator>
    </NavigationContainer>
)

export default App
