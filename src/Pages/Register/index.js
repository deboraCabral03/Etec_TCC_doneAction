import * as React from 'react';
import { View, KeyboardAvoidingView, Image, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default function Register({ navigation }) {
  
  return (

    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.top}>
        <TouchableOpacity style={styles.btnBack}
        onPress={ () => navigation.navigate('Login')}>
          <Text style={styles.submitText}> X </Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.container}>
        <TextInput
        style={styles.input}
          placeholder="Nome completo" 
          autocorrect={false}
          onChangeText={()=>{} }
        />
        
        <TextInput
        style={styles.input}
          placeholder="Email" 
          autocorrect={false}
          onChangeText={()=>{} }
        />

        <TextInput
        style={styles.input}
          placeholder="Usuário" 
          autocorrect={false}
          onChangeText={()=>{} }
        />  

         <TextInput
        style={styles.input}
          placeholder="Senha" 
          autocorrect={false}
          onChangeText={()=>{} }
        />

         <TextInput
        style={styles.input}
          placeholder="Confirme a senha" 
          autocorrect={false}
          onChangeText={()=>{} }
        />

        <TextInput
        style={styles.input}
          placeholder="Data de nascimento" 
          autocorrect={false}
          onChangeText={()=>{} }
        />


        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}> Cadastrar </Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}> Criar Conta </Text>
        </TouchableOpacity> 
    
        <Text style={styles.txtConect}> ou conecte-se com </Text>
        <Image  source={{uri:'https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-0-cke.jpg'}}
        style={styles.link} /> 
      </View>
      
    </KeyboardAvoidingView>
  );
}


//após criar os campos, iniciar a estilização dos campos
//importar o styleSheet
//criar a contante para estilizar

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#E5E5E'
  },
  top:{
    alignSelf:'rigth',
    alignItems:'center',
    marginTop:50,
    width:'20%',
  },

  containerLogo:{
   alignItems:'center',
   width:'30%',
   height:'10%',
  },
    // bloco onde vai localizar os imput 
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:30,
  },
    //style dos imput 
  input:{
    backgroundColor:"rgba(160, 160, 160, 0.26)",
    width:295,
    height:44,
    marginBottom:15,
    borderRadius: 50,
    padding:10,
    color: '#141414',
    fontSize: 18,
    fontStyle:'Roboto'
  },
    // estilo dos botões 
    //estilo do botao voltar 
  btnBack:{
    backgroundColor:'#34816F',
    borderRadius:50,
    width:35,
    height:35,
    alignItems:'center',
    justifyContent:'center',
  },
    //estilo do botao acessar
  btnSubmit:{
    backgroundColor:'#34816F',
    borderRadius:50,
    width:270,
    height:39,
    alignItems:'center',
    justifyContent:'center',
  },
  submitText:{
    color:'#FFFFFF',
    fontSize:20,
    fontStyle: 'Roboto'
  },
    //stilo dos botoes conectar  
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#FFF'
  },
    // estilo de textos 
  txtConect:{
    color:'#141414',
    fontSize:18,
    fontStyle: 'Roboto'
  },
  link:{
    weight:50,
    height:50

  }
});