import React, { Component } from 'react';

//importing icon lib
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//react-navigation bottom tabs import
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';

//importing intagram tabs
import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => (null);

export class Main extends Component<{ fetchUser: any }>{
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <Tab.Navigator initialRouteName='Feed' labeled={false} >
        <Tab.Screen name="Feed" component={FeedScreen} options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          )
        }}/>
        <Tab.Screen name="AddContainer" component={EmptyScreen}
          listeners={({ navigation }) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate('Add')
            }
          })}
          options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='plus-box' color={color} size={26} />
          )
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name='account-circle' color={color} size={26} />
          )
        }}/>
      </Tab.Navigator>
    )
  };
};

const mapStatetToProps = (store: any) => ({
  currentUser: store.userState.currentUser
});

const mapDispatchProps = ( dispatch: any ) => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStatetToProps, mapDispatchProps)(Main);
