import  React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Input} from 'react-native-elements'


export default function Login({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  // const declarando o que não pode ter no email
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  //const responsável por fazer a validação dos inputs email e senha
  const validate = () => {
    let error = false 
    setErrorEmail(null)
    setErrorPassword(null)
    if (!re.test(String(email).toLowerCase())){
    setErrorEmail("Preencha seu e-mail corretamente")
    error = true
    }
    if(email == null){
      setErrorPassword("Ops, seu e-mail não pode ser vazio!")
      error = true
    }
    if (password == null){
      setErrorPassword("Ops, sua senha não pode ser vazia!")
      error = true
    }
    if(password  < 4){
      setErrorPassword("Senha não pode ser menor que 4 caracteres.")
      error = true
    }
    return !error
    }

    //função para enviar o formulario para o controller
  async function sendForm()
  {
      let response=await fetch('http://192.168.43.164:3000/login',{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: email,
              senha: password
          })
      });
      let json=await response.json();
      if(json === 'error'){
          setErrorEmail("Email ou Senha errados!")
          setErrorPassword("Email ou Senha errados!")
          await AsyncStorage.clear();
    }else{
        await AsyncStorage.setItem('userData', JSON.stringify(json));
        navigation.navigate('Home');
        } 
  }


//const chamada no onpress do botão "Acessar"
  const login = () => {
    if (validate()){
     //sendForm()
     navigation.navigate('Home');
    }
    }

  return (
    <View>
    <View>
        <Image  
                    source={require('../Images/logo.jpeg')} 
                    style={{width:400, height:250, marginTop: 55}}
                    resizeMode="contain"
                />
    </View>    
    <View style={styles.container}>
        <Input
          style={styles.caixa}
          placeholder="Email" 
          //autocorrect={false}
          onChangeText={value =>{ 
            setEmail(value)
            setErrorEmail(null)
          }}
          keyboardType="email-address"
          errorMessage={errorEmail}
        />
        <Input
          style={styles.caixa}
          placeholder="Senha" 
          //autocorrect={false}
          onChangeText={value =>{
            setErrorPassword(null)
            setPassword(value)
          }}
          secureTextEntry={true}
          errorMessage={errorPassword}
        />
        <TouchableOpacity style={styles.componente}
         onPress={ () => navigation.navigate('forgotPassword')}>
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
   color: '#222',
   fontSize: 14,
   borderRadius: 100,
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
    //  marginTop: -190,
        marginBottom:10,
        marginLeft: 90,
     },

 registro:{
       fontSize: 13,
       fontFamily: 'roboto',
       marginLeft: '60%',
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