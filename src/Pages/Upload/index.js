import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image,ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {Input} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

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
    <ScrollView>
    <View style={styles.container}>
    
    <TouchableHighlight style={styles.imagePicker} onPress={escolherImagem}>
    <Feather name='plus' color="#FFFF" size={35} style={styles.icon}/>
    </TouchableHighlight>

    <Image source={{uri:donation}} style={styles.donation} />
    
  
    <View style={styles.view}>

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

      
       </View>
       <Text style={{color: '#34816F', fontSize: 23, fontWeight: 'bold', marginTop: -80}}> DESCRIÇÃO </Text>
        
       <Input style={styles.description}
          placeholder="Gênero" 
          autocorrect={false}
          onChangeText={()=>{} }/> 

      <TouchableOpacity style={styles.publication}>
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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  imagePicker: {
        backgroundColor: '#34816F',
        width: 70,
        height: 80,
        alignSelf: 'center',
        borderRadius: 10,
        marginRight: '50%',
        marginLeft:-7,
        marginTop: '20%',
       // marginBottom: '10%'
  },

  donation:{
        width: 150,
        height: 200,
        alignSelf: 'flex-end',
        marginTop: -85,
        marginBottom: '5%',
        marginRight: '30%',
        borderRadius: 10

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
        marginTop: '2%'
 },

 description:{
        backgroundColor: '#ffff', 
        padding: '20%',
        alignText:'start'
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
