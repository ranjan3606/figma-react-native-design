import React from 'react'
import {StyleSheet } from 'react-native';

import Home from './components/Home'
import Details from './components/Details'
import Profile from './components/Profile'
// import Liked from './components/Liked'
import colors from './assets/color/color'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

Entypo.loadFont();
MaterialCommunityIcons.loadFont()

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return(
    <Tab.Navigator 
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.black,
        inactiveTintColor: colors.gray,
        showLable: false
      }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen name="Details" component={Details} 
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="details" size={32} color={color} />
          )
        }}
      />     
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" size={32} color={color} />
          )
        }}
      />   
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='TabNavigator' 
          component={TabNavigator} 
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="details" 
          component={Details} 
          options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({  
  tabBar: {
    backgroundColor: colors.white,
    borderRadius: 28,
    borderTopRightRadius: 20
  }
})

export default App;