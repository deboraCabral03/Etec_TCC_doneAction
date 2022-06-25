import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Constants from 'expo-constants';

export default function forgotPassword({navigation}) {
  return (
      <View style={styles.container}>
          <TouchableOpacity>
              <Text style={styles.button}> - </Text>
          </TouchableOpacity> 
              <Text style={styles.password}> REDEFINIR SENHA </Text>
              <Text style={{color: 'black', fontSize: 16, fontFamily:'Montserrat', fontWeight: 'medium', marginBottom: '20%', marginTop: -90}}>Crie uma nova senha </Text>
                  <TextInput style={styles.input}/>
                      <Text style={{color: 'black', fontSize: 16, fontFamily:'Montserrat', fontWeight: 'medium', marginTop: 20, marginBottom:'20%'}}>Confirme sua senha </Text>
                          <TextInput style={styles.input}/>
                              <TouchableOpacity style={styles.next}>
                                  <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20, textAlign: 'center', position: 'relative'}}> PROSSEGUIR </Text>
                              </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
},
  password:{
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginLeft: '8%',
    marginTop: '54%'
},
  icon: {
    width: '60%',
    height: '40%',
    marginTop: -5,
    marginBottom: '28%',
    marginLeft: '20%'
},
  input:{
    padding:'4%',
    borderRadius: 100,
    backgroundColor: '#E9E9E9',
    marginBottom: '10%',
    marginTop: -55,
    height: '7%',
},
  next:{
    padding: '4%',
    backgroundColor: '#34816F',
    height: '7%',
    width: '70%',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: '60%',
}
});
