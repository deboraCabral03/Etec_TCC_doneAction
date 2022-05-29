import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, FlatList, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

 const Home=()=>{
    const [searchInput, setSearchInput] = useState('');
    const [feed, setFeed] =useState([]);

    // pegando nosso feed
    // useEffect(() => {
    //    fetch('https://aurora-django-app.herokuapp.com/feed_count=0')
    //    .then((re)=>re.json())
    //    .then((re)=>setFeed(re.response))
    //    .catch(()=>(alert('Erro ao carregar')))      
                

    // }, []);
    return (
      <View>
          <View style={styles.mainView}>
              <Text style={styles.Heading}>Menu</Text>
                  <TouchableOpacity style={{alignSelf: 'right'}}>
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
          <View style={styles.mainPostView}>
              {feed.length <1?
                  <ActivityIndicator 
                    size={"large"} 
                    color={"#2FBBF0"}
                  />
                  :
                      <FlatList
                          data={feed}
                          keyExtractor={(item,index)=>{return item.post_id.toFixed()}}
                          renderItem={({item, index})=>(
                              <View style={styles.postView}>
                                  <View style={styles.postTtile}> 
                                      <View style={styles.imageView}>
                                          <Image style={styles.artistPhoto} source={{uri:item.artist_photo}}/>
                                          <Text>Name E Title</Text>
                                      </View>
                                  </View>
                                    
                              </View>
                          )}
                      /> 
              }
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
      justifyContent: 'center',
      flex:1
  },
  Heading:{
      fontSize:18,
      fontWeight:'bold',
      color: '#34816F',
      marginHorizontal: 90
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
  mainPostView:{
    width:'100%',  
  },
  postTtile:{
    width:'90%',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  postView:{
    width:'90%',
    alignItems:'center',
    marginTop:'20',
  },
  artistPhoto:{
    backgroundColor:'rgba(0,0,0,0.06)',
    width:50,
    height:50,
    borderRadius:50,
  },
  imageView:{
    display:'flex',
    flexDirection:'row'
  }
});