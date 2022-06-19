import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Image, FlatList, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Donation from './donation';

const Header=()=>{
    const [searchInput, setSearchInput] = useState('');
    const [feed, setFeed] =useState([]);
return (
    <View style={{flex:'1'}}>
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
        <View style={{ width: '80%',  height: '15%', alignSelf:'center', }}>
  <Text style={{fontSize: 15, color:'#34816F', fontWeight:'bold', textAlign: 'left',}}><p>- Doe para pessoas ou Ong's perto de você!</p> - Use o chat para combinar o local de entrega/recebimento!
   </Text>
  </View>
  
      <View style={styles.view2}>
      <Text style={{color: 'white', marginBottom:'40%', fontSize:17, paddingLeft:'1%', marginBottom:'3%' ,fontWeight:'bold'}}> Populares </Text>
       <ScrollView style={styles.scrollView} horizontal={true}>
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
export default Header
const styles = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        marginTop:'8%',
        justifyContent: 'center',
        marginBottom:'10%'
    },
    Heading:{
        fontSize:18,
        fontWeight:'bold',
        color: '#34816F',
        marginHorizontal: 90
    },
    containerInputSearch:{
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:'8%',
    },
    searchInput:{ 
      heigth:'80%',
      width: '90%',
      borderRadius: 10, 
      backgroundColor:"white",
      borderWidth:2.5,
      borderColor:"#D0BAF3",
      fontSize: 18,
      height: 39,
    },
    imageView:{
      display:'flex',
      flexDirection:'row'
    },
    view2:{
      backgroundColor:'#34816F',
      width: '92%',
      height: '32%',
      alignSelf:'center', 
      borderRadius: 10,
      marginTop:'13%'
    },
    scrollView: {
      padding: '30%'
    },
  })