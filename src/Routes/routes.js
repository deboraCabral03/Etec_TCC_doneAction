import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './Pages/Login';
import Home from  './Pages/Home';
import Register from './Pages/Register';

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
        component = {Home}
        options = {{
            title: 'Home',
            headerShown: true
        }}
      />
      <Drawer.Screen
        name = 'Register'
        component = {Register}
        options = {{
            title: 'Cadastre-se',
            headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}
