import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'
import Profile from './screens/Profile'
// import Tilly from './screens/Tilly'


export default createBottomTabNavigator({
  Explore:{
    screen:Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen:Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Trips:{
    screen:Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-airplane" color={tintColor} size={24} />
      )
    }
  },
  Inbox:{
    screen:Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-mail" color={tintColor} size={24} />
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarLabel:'PROFILE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  },
  // Tilly:{
  //   screen:Tilly,
  //   navigationOptions:{
  //     tabBarLabel:'TILLY',
  //     tabBarIcon:({tintColor})=>(
  //       <Icon name="ios-person" color={tintColor} size={24} />
  //     )
  //   }
  // }
},{
  tabBarOptions:{
    activeTintColor:'red',
    inactivveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
