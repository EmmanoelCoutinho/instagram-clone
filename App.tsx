import React from 'react';

//import firebase
import firebase from 'firebase';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//importing screen, and using like an component
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//Using .env, to see the key enter in your project on firebase after in settings
const firebaseConfig = {
  apiKey: process.env['API_FIREBASE_KEY'],
  authDomain: process.env['FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['PROJECT_ID'],
  storageBucket: process.env['STORAGE_BUCKET'],
  messagingSenderId: process.env['SENDER_ID'],
  appId: process.env['APP_ID'],
  measurementId: process.env['MEASUREMENT_ID']
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} 
        options={{headerShown: false}} />
        <Stack.Screen name='Register' component={RegisterScreen} 
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

