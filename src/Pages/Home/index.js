import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Image, FlatList, Button, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from './header';
import SeparatorItem from './separatorItem';

const logo = require("../Images/logo.jpeg");
const logo2 = require("../Images/logo.jpeg");
const logo3 = require("../Images/logo.jpeg");
const DATA = [

  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Blusa de frio GAP, tamanho 12.",
    image:require("../Images/perfil.jpeg"),
    name: "Debora Cabral",
    post:require("../Images/doacao1.jpeg"),
  },
  {
    id: "88694a0f-3da1-471f-bd96-145571e29d72",
    title: "Boneco Mário, 30cm, em bom estado",
    image:require("../Images/perfil2.jpeg"),
    name: "Vitor Gomes",
    post:require("../Images/brinquedo.jpeg"),
  },
  {
    id: "75694a0f-3da1-471f-bd96-145571e29d72",
    title: "Cama solteiro, madeira de qualidade, sem colchão",
    image:require("../Images/perfil3.jpeg"),
    name: "Murilo Cavalcanti",
    post:require("../Images/doacao3.jpeg"),
  },
  {
    id: "08624a0f-3da1-471f-bd96-145571e29d72",
    title: "Geladeira em bom estado, apenas 3 anos de uso, estou doando pois irei mudar para outra cidade.",
    image:require("../Images/perfil4.jpeg"),
    name: "Camila Cesco",
    post:require("../Images/doacao2.jpeg"),
  },
  {
    id: "67624a0f-3da1-471f-bd96-145571e29d72",
    title: "Fogão quatro bocas, inox, em ótimo estado e todas as bocas funcionando.",
    image:require("../Images/doacao5.jpeg"),
    name: "Stefany Cardoso",
    post:require("../Images/perfil5.jpeg"),
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, }) => (
    <View style={styles.feedItem}>
        <Image source={item.image} style={styles.avatar}/>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                </View>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                        <Image source={item.post} style={styles.postImage} resizeMode="cover" />
                            <Text style={styles.post}>{item.title}</Text>
                                <TouchableOpacity style={styles.pubTouchable} onPress={() => changeColor()}>
                                    <Feather 
                                      name='check'
                                      size={23}
                                      color="white"
                                    />
                                        <Text style={{fontWeight:'bold', color:'white', fontSize:"14"}}>Eu quero</Text>
                    
                                </TouchableOpacity>
                </View>
            </View>
    </View>
);
 const Home=()=>{
    const [selectedId, setSelectedId] = useState(null);
    const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
    return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          image={{uri: item.image}}
          post={{uri: item.post}}

        />
  );
};
    return (
        <View style={styles.container}>
            <FlatList
              ListHeaderComponent={Header}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
              showsVerticalScrollIndicator={false}
            />
          <StatusBar style="auto" />
        </View>             
  );
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
},
  item: {
    padding: 20,
    marginVertical: 70,
    height:'100%',
    width:'90%',
    alignSelf:'center',
    marginBottom:'70%'
},
  title: {
    fontSize: 14,
},
  feedItem: {
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8,
    width:'95%',
    alignSelf:'center',
},
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
},
  name: {
  fontSize: 15,
  fontWeight: "500",
  color: "#454D65"
},
  post: {
    marginTop: 11,
    fontSize: 14,
    color: "#black",
    marginBottom: 4,
},
  postImage: {
    width: undefined,
    height: 190,
    borderRadius: 5,
    marginVertical: 16
},
  pubTouchable: {
    alignSelf: 'right', 
    marginTop:'5', 
    backgroundColor:'#987FC0', 
    width:"31%", 
    flexDirection:'row',
    borderRadius:'10%'
},
})