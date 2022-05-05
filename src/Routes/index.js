import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import Notifications from '../Pages/Notifications';
import Upload from '../Pages/Upload';
import Chat from '../Pages/Chat';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return( 
    <Tab.Navigator
      barStyle= {estilo.menu}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options = {{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({color, size})=> (
            <Feather name='home' color="#987FC0" size={25}/>
          )
          }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options = {{
          title: 'Notificações',
          headerShown: false,
          tabBarIcon: ({color, size})=> (
            <Feather name='bell' color="#987FC0" size={25}/>
          )
          }}
      />
      <Tab.Screen
        name='Upload'
        component={Upload}
        options = {{
          title: ' ',
          tabBarIcon: ({color, size})=> (
            <Feather name='plus-circle' color="#987FC0" size={25}/>
          )
          }}
      /> 
      <Tab.Screen
        name='Chat'
        component={Chat}
        options = {{
          title: 'Chat',
          tabBarIcon: ({color, size})=> (
            <Feather name='message-circle' color="#987FC0" size={25}/>
          )
          }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options = {{
          title: 'Perfil',
          tabBarIcon: ({color, size})=> (
            <Feather name='user' color="#987FC0" size={25}/>
          )
          }}
      />
    </Tab.Navigator> 
   );
 }
 const estilo = StyleSheet.create({
  menu:{
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    tabBarActiveTintColor: '#34816F'
  }
});

//instances

const Drawer = createDrawerNavigator(); 

export default function Routes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name = 'Login'
        component = {Login}
        options = {{
            title: 'Página Inicial',
            headerShown: false
        }}
      />
      <Drawer.Screen
        name = 'Home'
        component = {MyTabs}
        options = {{
            title: 'Página de Perfil',
            headerShown: false
        }}
      />
      <Drawer.Screen
        name = 'Register'
        component = {Register}
        options = {{
            title: 'Add or Edit Project',
            headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}