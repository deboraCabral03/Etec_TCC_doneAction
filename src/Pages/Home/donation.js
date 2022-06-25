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
        source={require('../Images/doacao3.jpeg')}/>

        <Text style={{textAlign: 'left'}}> Cama solteiro, de qualidade. </Text>
      </TouchableOpacity> 

 </View>
);
} 
const styles = StyleSheet.create({
  public:{ backgroundColor: '#fff',
          borderRadius: 18, 
           width: 105,
           height: 150,
           marginRight: '22%',
           border: 0.5,
           borderColor: '#C5C5C5',
           marginLeft: 15
  },

  product:{ width: 85,
                height: 90,
                border: 14,
                marginBottom: 2,
                marginTop:15,
                marginLeft: 10
  }
    
}); 