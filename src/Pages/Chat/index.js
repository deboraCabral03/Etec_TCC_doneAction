import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Divider } from 'react-native-paper';
import { Feather }  from "@expo/vector-icons";

export default function App() {
const [searchInput, setSearchInput] = useState('');

    const [feed, setFeed] =useState([]);

  return (
    <View style={{flex:"1"}}>
        <View style={{marginTop:"15%", flexDirection:"row"}}>
        <TouchableOpacity style={{alignSelf:"left"}}>
            </TouchableOpacity>
            <Text style={{marginHorizontal:"32%", fontWeight: "bold", color:"#34816F",  }}> Chat </Text>
              <Feather
              name='edit'
              size={25}
              color="#f5cae6"
              />
        </View>
        <View style={styles.containerInputSearch}>
            <TextInput
              value={searchInput}
                onChangeText={(val)=>setSearchInput(val)}
                placeholder={"  Pesquisar "}
                placeholderTextColor={"#808080"}
                style={styles.searchInput}
            />
        </View>
        <View style={styles.container}>
        <ScrollView>
         <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='message-square'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Você recebeu uma denúncia, veja. </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='message-square'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Você recebeu uma denúncia, veja. </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='message-square'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Você recebeu uma denúncia, veja. </Text>
            </TouchableOpacity>
            
            </ScrollView>
        </View>
  </View>
    

   );
}
        
const styles = StyleSheet.create({
  searchInput:{
    width: '90%',
    height: 39,
    borderRadius: 10,
    backgroundColor:"white",
    borderWidth:2.5,
    borderColor:"#DBD9D9",
    fontSize: 18,
  },
  containerInputSearch:{
      marginTop: 15,
      flexDirection: 'row',
      justifyContent:'center',

  },
    touchable:{
    backgroundColor:'D8D6D6',
    marginTop:'1%',
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1, 
    borderColor: '#A9A9A9',
    width: '95%',
    height:"9%",
    borderRadius : 1 ,
    paddingVertical : 10 , 
    paddingHorizontal : 12,
    marginTop: '1%',
    paddingBottom:"9%",
    paddingTop:'-3%',
  },

  container:{
    backgroundColor:"#D8D6D6", 
    marginTop:"4%", 
    width:"95%",
    borderColor: '#34816F',
    borderRadius : 5 ,
    alignSelf:"center",
    height:"50%",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
},
  });
