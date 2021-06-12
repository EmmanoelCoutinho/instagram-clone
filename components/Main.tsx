import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

export class Main extends Component<{ fetchUser: any, currentUser: any }>{
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    const { currentUser } = this.props;

    if(currentUser === undefined){
      return(
        <View></View>
      )
    }
    
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{currentUser.name} are already logged In! 😊</Text>
      </View>
    )
  };
};

const mapStatetToProps = (store: any) => ({
  currentUser: store.userState.currentUser
});

const mapDispatchProps = ( dispatch: any ) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStatetToProps, mapDispatchProps)(Main);
