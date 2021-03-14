import React from 'react'
import HomeScreen from './src/HomeScreen'
import DetailsScreen from './src/DetailsScreen'
import PhotoScreen from './src/PhotoScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//import firebase from 'firebase'
//import { FirebaseConfig } from './firebase.config'
//require('firebase/functions')

const Stack = createStackNavigator<RootStackParamList>()

const App = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: false,
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle: 'Pokedex',
                    headerRight: () => (
                        <FontAwesome5
                            onPress={() => navigation.navigate('Photo')}
                            name="camera"
                            color="#fff"
                            size={30}
                            style={{ padding: 10 }}
                        />
                    ),
                })}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Photo" component={PhotoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default App
