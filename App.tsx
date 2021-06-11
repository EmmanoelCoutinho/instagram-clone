import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {
  API_FIREBASE_KEY,
  FIREBASE_AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from '@env';

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
  apiKey: API_FIREBASE_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

interface Istate {
  loggedIn?: boolean;
  loaded: boolean;
}

export class App extends Component<{}, Istate> {
  constructor(props:any){
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded:true
        });
      }else{
        this.setState({
          loggedIn:true,
          loaded:true
        });
      }
    })
  }

  render() {
    const {loggedIn, loaded} = this.state;
    
    if(!loaded){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Loading... 😊</Text>
        </View>
      );
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={LandingScreen} 
          options={{headerShown: false}} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      )
    }
    return(
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>You are already logged In! 😊</Text>
      </View>
    );
    
  }
}

export default App
