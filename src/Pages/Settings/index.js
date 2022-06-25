import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Feather } from '@expo/vector-icons';

export default function Settings({navigation}) {
  const handleOpenWithLinking = () => {
    Linking.openURL('https://flourishing-gingersnap-7a0959.netlify.app/');
  };

    return (
    <View style={styles.container}>

    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Profile')}>
    <Feather name='chevron-left' color="#34816F" size={35}  />
    </TouchableOpacity>
    <Text style={styles.config}> CONFIGURAÇÕES </Text>

      <TouchableOpacity style={styles.button}> 
      <Text style={{fontSize: 16, color: '#34816F'}}>
       Politicas do DoneAction 
       </Text>
      <Text style={{fontSize: 20, marginLeft: '90%', marginTop: -23}}> ＞ </Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button2}> 
      <Text style={{fontSize: 16, color: '#34816F'}}> Termos de Uso </Text>
      <Text style={{fontSize: 20, marginLeft: '90%', marginTop: -23}}> ＞ </Text>
      </TouchableOpacity>



        <TouchableOpacity style={styles.next}>
        <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', position: 'relative'}} onPress={() => navigation.navigate('Login')}> SAIR</Text>
        </TouchableOpacity>    
    </View>
  );
}

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8,
  },

  config:{
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginLeft: '10%',
    marginBottom: '6%'
  },

  button: {
      borderWidth: 2,
      borderTopColor: "#000000",
      borderLeftColor: '#FFFF',
      borderRightColor: '#FFFF',
      padding: '5%',
      width: '105%',
      marginLeft: -10,
      marginBottom: '20%',
      //marginTop: -300
  },
    button2: {
      borderWidth: 2,
      borderTopColor: "#FFFF",
      borderLeftColor: '#FFFF',
      borderRightColor: '#FFFF',
      padding: '5%',
      width: '105%',
      marginLeft: -10,
      marginTop: -75,
      marginBottom: '20%'

  },

  next:{
      padding: '4%',
      backgroundColor: '#34816F',
      height: '7%',
      width: '70%',
      borderRadius: 100,
      alignSelf: 'center',
      marginTop: '90%'
  }

});
