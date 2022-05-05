import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

 const Home=()=>{
    const [searchInput, setSearchInput] = useState('');
    const [feed, setFeed] =useState([]);

    // pegando nosso feed
    //aindaTrabalhando na tela ...... useEffect(() => {
    //    fetch('https://aurora-django-app.herokuapp.com/feed_count=0')
    //    .then((re)=>re.json())
    //    .then((re)=>{
    //          setFeed(re.response);

    //    })
    // }, []);
    return (
      <View>
          <View style={styles.mainView}>
              <Text style={styles.Heading}>Menu</Text>
                  <TouchableOpacity styles={{alignSelf:'right'}}>
                      <Feather 
                        name='filter'
                        size={27}
                        color="#987FC0"
                      />
                  </TouchableOpacity>
          </View>
          <View style={styles.containerInputSearch}>
              <TextInput 
                value={searchInput} 
                onChangeText={(val)=>setSearchInput(val)}
                placeholder={" 🔍 Pesquisar Ex: Eletrodoméstico"}
                placeholderTextColor={"#808080"}
                style={styles.searchInput}
              />
          </View>
          <View style={styles.propaganda}>
              <Text style={{fontSize:14,}}
                ESPAÇO PARA UMA POSSIVEL PROPAGANDA
              />
          </View>

            <StatusBar style="auto" />
      </View>
  );
}
export default Home

const styles = StyleSheet.create({
  mainView:{
      flexDirection:'row',
      marginTop:30,
      justifyContent: 'center'
  },
  Heading:{
      fontSize:18,
      fontWeight:'bold',
      color: '#34816F',
  },
  containerInputSearch:{
      marginTop: 30,
      flexDirection: 'row',
      flex:1,
      justifyContent:'center',
  },
  searchInput:{ 
    width: '90%',
    height: 39,
    borderRadius: 10, 
    backgroundColor:"white",
    borderWidth:2.5,
    borderColor:"#D0BAF3",
    fontSize: 18
  },
  propaganda:{
    marginTop: 30,
    flexDirection: 'row',
    flex:1,
    alignSelf:'center',
    backgroundColor:"gray",
    width:'85%',
    height:'90'
  },
});