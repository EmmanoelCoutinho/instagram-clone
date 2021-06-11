import React, { Component } from 'react'

import {View, Button, TextInput, Text} from 'react-native';

import firebase from 'firebase';

interface Istate {
  email: string
  password: any
}

export class Login extends Component<{}, Istate> {
  constructor(props: any){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(){
    const {email, password}= this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Email'
        onChangeText={email => this.setState({ email })} />
        <TextInput placeholder='Password'
        secureTextEntry={true}
        onChangeText={password => this.setState({ password })} />
        <Button title='Sign In'
        onPress={() => this.onSignIn()} />
      </View>
    )
  }
}

export default Login
