import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image,ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {Input} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function Upload({ navigation }) {    
    const [donation, setDonation] = React.useState (null);

    async function escolherImagem(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[3,4],
      quality:1,
      boolean: 3
    });

    if (!result.cancelled){
      setDonation(result.uri);
    }
  }

  return (
    <ScrollView style={{flex:'1', backgroundColor:'white'}}>
    <View style={styles.container}>
    <Image source={{uri:donation}} style={styles.donation} />
    </View>
    <View style={styles.view}>
    
    
    <TouchableOpacity style={styles.editPick} onPress={escolherImagem}>
    <MaterialIcons name='add-photo-alternate' color="#34816F" size={30}/>
    </TouchableOpacity>
  
        <Input style={styles.input}
          placeholder="Nome do Produto" 
          autocorrect={false}
          onChangeText={()=>{} }/>

        <Input style={styles.input}
          placeholder="Cor" 
          autocorrect={false}
          onChangeText={()=>{} }/>

        <Input style={styles.input}
          placeholder="Tamanho" 
          autocorrect={false}
          onChangeText={()=>{} }/>

        <Input style={styles.input}
          placeholder="Gênero" 
          autocorrect={false}
          onChangeText={()=>{} }/>      

      
       
       <Text style={{color: '#34816F', fontSize: 23, fontWeight: 'bold'}}> DESCRIÇÃO </Text>
        
       <Input style={styles.description}
          placeholder="Descreva detalhes da sua doação." 
          autocorrect={false}
          onChangeText={()=>{} }/> 

      <TouchableOpacity style={styles.publication} onPress={ () => navigation.navigate('Home')}>
      <Text style={{color: 'white', fontSize: 20, 
                    fontWeight: 'bold', textAlign: 
                    'center', marginTop: 5}}> 
      PUBLICAR DOAÇÃO
      </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    width:'100%',
    height:'50%',
    marginBottom:'2%',
  },

  imagePicker: {
        alignSelf: 'center',
        marginTop:'45%'
  },
  editPick:{  
    alignItems: 'center',
    alignSelf:'right',
    marginBottom: '2%',
  },

  donation:{
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        position:'absolute',
  },

  icon:{
    alignSelf: 'center',
    marginTop: '30%'
  },

 view:{
   backgroundColor: '#ffff',
   marginBottom: '25%'

 },

 input:{
        backgroundColor: '#ffff',
        marginTop: '2%',
 },

 description:{
        backgroundColor: '#ffff', 
        padding: '12%',
        alignText:'top',
        marginTop:'5%',
        marginBottom:'12%'
 },

  publication:{
    backgroundColor: '#34816F',
    width: 300,
    height: 40,
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: '5%'
  }


});
