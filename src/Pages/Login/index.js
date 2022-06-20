import  React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Input} from 'react-native-elements';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';



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
      let response=await fetch('http://localhost:19006/login',{
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
     sendForm()
     navigation.navigate('Home');
    }
    }

  return (
    <View style={{backgroundColor:'white',flex: '1',}}>
    <View >
        <Image  
                    source={require('../Images/logo.jpeg')} 
                    style={{width:400, alignSelf:'center', height:250, marginTop: 55, marginBottom:20}}
                    resizeMode="contain"
                />
    </View>    
    <View style={styles.container}>
        <Input
          style={styles.caixa}
          placeholder="  Email" 
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
          placeholder="  Senha" 
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
            onPress={() => login()}>
            <Text style={styles.inscrever}>  INSCREVA-SE</Text>
          </TouchableOpacity> 
              <Text style={{marginLeft: 90, marginTop: -160, fontSize:'18',}}> ou entre com </Text>
              <View style={styles.socialMidiaIcon}>
                <TouchableOpacity style={styles.touchableSocialMidia}>
                    <MaterialCommunityIcons 
                      name='facebook'
                      size={29}
                      color="white"
                    />
                </TouchableOpacity>    
                <TouchableOpacity style={styles.touchableSocialMidia}>
                    <AntDesign 
                      name='google'
                      size={28}
                      color="white"
                    />
                </TouchableOpacity>
            </View>
   </View>
  </View>
 );
}
const styles = StyleSheet.create({
 container: {
   justifyContent: 'center',
   backgroundColor: 'white',
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
        marginBottom:10,
        marginLeft: 90,
     },

 registro:{
       fontSize: 13,
       fontFamily: 'arial',
       marginLeft: '59%',
     },

  conta:{
       marginBottom: 176,
       marginTop: -130,
       marginLeft: 40,
       fontSize:'18',
     },

   insc:{ 
        marginBottom: 200,
       marginTop: -194,
       marginLeft: 173,
   },
   inscrever:{  
    fontWeight: 'bold',
    color: '#D0BAF3'

   },

   socialMidiaIcon:{
    marginTop:'8%',
    flexDirection:'row',
    alignSelf:'center'
    
  },
  touchableSocialMidia:{
    borderRadius:'100%',
    backgroundColor:'#987FC0',
    marginHorizontal:'8%'
    
  }
});