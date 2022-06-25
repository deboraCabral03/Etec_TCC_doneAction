import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { Feather, Ionicons } from '@expo/vector-icons';
import Donation from '../Home/donation';

  export default function Profile({navigation}) {

  const [image, setImage] = React.useState ('./assets/logo');

    async function escolherImagem(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[1,1],
      quality:1
    });

    if (!result.cancelled){
      setImage(result.uri);
    }
  }

  return (
    <View style={styles.container}> 
    <View style={styles.view}>
    <TouchableOpacity style={styles.settingsButton}
     onPress={() => navigation.navigate('Settings')}
    >
    <Ionicons name='settings-outline' color="white" size={30}
    />
    </TouchableOpacity>
    <Image source={{uri:image}} style={styles.icon} />
    <Text style={styles.name}> Nome do Usuário </Text>
    <TouchableHighlight style={styles.editPick} onPress={escolherImagem}>
    <Feather name='edit' color="white" size={30}/ >
    
    </TouchableHighlight>

    <TouchableHighlight style={styles.edit}  >
     <Text style={{textAlign: 'center', color: '#FFFF'}}> 
       Editar Perfil
      </Text>
       </TouchableHighlight>
    </View>

      <View style={styles.view2}>
      <Text style={styles.pubsTitle}> Publicações </Text>
      <ScrollView horizontal={true} style={{marginTop: '9%'}}>
      <Donation/>
      <Donation/>
      <Donation/>
      <Donation/>
      <Donation/>
      </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffff', 
    flex:1
  },

  view:{
    backgroundColor: '#34816F',
  },

  icon:{
    width: 100,
    backgroundColor:'#E5E5E5',
    height: 100,
    borderRadius: 100,
    marginTop: '40%',
    marginBottom: -85,
    marginLeft: '3%',
    borderWidth:1,
    borderColor:'#34816F'
  },

  name:{
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
    marginLeft: '32%',
    marginBottom: '5%'
  },
  pubsTitle:{
    fontSize: 20,
    color: '#34816F',
    fontWeight: 'bold',
    marginLeft: '10%',
  },

  editPick:{
    backgroundColor: '#34816F', 
    width: 50, 
    height: 50, 
    borderRadius: 100, 
    alignItems: 'center',
    marginLeft: '40%',
    marginBottom: -55,
    paddingTop:'2%'
  },

  edit:{
    width: 95, 
    height: 25, 
    backgroundColor: '#34816F', 
    marginLeft: '65%',
    marginBottom: -50,
    marginTop: '4%',
    borderRadius: 100
  },

view2:{
    backgroundColor:'#E5E5E5',
    width: '100%',
    marginTop: '40%',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    height: '35%',
  
    
},
settingsButton:{
    marginTop:'8%',
    alignSelf:'center',
    paddingLeft:'78%'
}

});