import React, { Component } from 'react'

import {View, Button, TextInput} from 'react-native';

import firebase from 'firebase';

interface Istate {
  email: string
  password: any
  name: any
}

export class Register extends Component<{}, Istate> {
  constructor(props: any){
    super(props);

    this.state = {
      email: '',
      password: '',
      name: ''
    }

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp(){
    const {email, password, name}= this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .catch(err => console.log(err))
    
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Name'
        onChangeText={name => this.setState({ name })} />
        <TextInput placeholder='Email'
        onChangeText={email => this.setState({ email })} />
        <TextInput placeholder='Password'
        secureTextEntry={true}
        onChangeText={password => this.setState({ password })} />
        <Button title='Sign Up'
        onPress={() => this.onSignUp()} />
      </View>
    )
  }
}

export default Register
