import  React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Input} from 'react-native-elements'

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPasswordl] = useState(null)
  
  const validate = () => {
    if (email == null)
    setErrorEmail("Preencha seu e-mail corretamente")
    return false
  }

  const login = () => {
    if (validate()){
      console.log("Logando")
    }
    navigation.navigate('Home')
  }


  return (
    <View style={styles.container}>
        <Input
          style={styles.caixa}
          placeholder="Email" 
          //autocorrect={false}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />

        <Input
          style={styles.caixa}
          placeholder="Senha" 
          //autocorrect={false}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
          errorMessage={errorPassword}
        />

         <TouchableOpacity style={styles.componente}>
         <Text style={styles.registro}> Esqueceu a senha?</Text>
         </TouchableOpacity> 

       <TouchableOpacity style={styles.mensagem}
        onPress={() => login()}>
       <Text style={styles.acesso}>  Acessar </Text>
       </TouchableOpacity> 

       <Text style={styles.conta}> Não tem uma conta? </Text>
       <TouchableOpacity style={styles.insc}
       onPress={ () => navigation.navigate('Register')}>
       <Text style={styles.inscrever}> INSCREVA-SE</Text>
       </TouchableOpacity> 
     
        <Text style={{marginLeft: 90, marginTop: -160}}> ou inscreva-se com </Text>

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
  
  icon:{
     width: 340,
     height: 355,
     marginRight: 40,
     marginLeft: -20,
     marginBottom:190,
     marginTop: -150
  },

 caixa: {    
   backgroundColor:'#EAEAEA',
   alignItems: "center",
   marginTop: -190,
   marginBottom:200,
   color: '#222',
   fontSize: 14,
   borderRadius: 100,
   padding:12,
   marginLeft: 25,
   marginRight: 25,
    },

 mensagem:{
   backgroundColor:'#34816F',
   alignItems: "center",
   marginTop: 12,
   marginBottom:160,
   color: '#222',
   fontSize: 14,
   borderRadius: 100,
   padding:7, 
   marginLeft: 40,
   marginRight: 40,
   },

 acesso:{ 
     color: '#fff',
     fontSize: 18
   },

 componente:{
        alignItems: "center",
        marginTop: -190,
        marginBottom:10,
        marginLeft: 90,
     },

 registro:{
       fontSize: 13,
       fontFamily: 'roboto'
     },

  conta:{
       marginBottom: 176,
       marginTop: -130,
       marginLeft: 40
     },

   insc:{ 
        marginBottom: 200,
       marginTop: -194,
       marginLeft: 173,
   },

   inscrever:{  fontWeight: 'bold',
                   color: '#D0BAF3'

   },

  


});
