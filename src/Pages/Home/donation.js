import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';

export default function Donation (props){
  
  return(
 <View style={styles.botao}>
       <TouchableOpacity style={styles.public}>
        <TouchableOpacity style = {{marginTop: 3, marginBottom: -15, marginLeft: 10}}> 
      </TouchableOpacity>
     
        <Image style= {styles.product}
        source={require('../Images/brinquedo.jpeg')}/>

        <Text style={{textAlign: 'left'}}> Super-Mário </Text>
      </TouchableOpacity> 

 </View>
);
} 
const styles = StyleSheet.create({
  public:{ backgroundColor: '#fff',
          borderRadius: 18, 
           width: 105,
           height:150,
           marginTop: -98,
           marginRight: 110,
           marginLeft: -89,
           border: 0.5,
           borderColor: '#C5C5C5'
  },
  product:{ width: 85,
                height: 90,
                border: 14,
                marginBottom: 8,
                marginTop:'24%',
                marginLeft: 10
  }
});