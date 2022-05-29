import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      
     <View style={styles.view}>

        <Image style= {styles.icon}
        source={require('../Images/logo.jpeg')}></Image>
        <Text style = {styles.nome}> Nome do Usuário </Text>
     </View>

    <View style={styles.view2}>
        
        <TouchableHighlight    style = {styles.estrela}> 
                <Text style= {{color: '#ffff', fontSize: 17}}> ⭐ </Text> 
        </TouchableHighlight>

        <TouchableHighlight    style = {styles.estrela}> 
          <Text style= {{color: '#ffff', fontSize: 17}}> ⭐ </Text> 
        </TouchableHighlight>

        
        <TouchableHighlight    style = {styles.estrela}> 
        <Text style= {{color: '#ffff', fontSize: 17}}> ⭐ </Text> 
        </TouchableHighlight>
        
        <TouchableHighlight    style = {styles.estrela}> 
          <Text style= {{color: '#ffff', fontSize: 17}}> ⭐ </Text> 
        </TouchableHighlight>

        
        <TouchableHighlight    style = {styles.estrela}> 
          <Text style= {{color: '#ffff', fontSize: 17}}> ⭐ </Text> 
        </TouchableHighlight>

      <TouchableOpacity style={styles.editar}>
        <Text style={{marginLeft: 3, color: '#fff', fontWeight: 'bold'}}> Editar Perfil</Text>
        </TouchableOpacity> 
         
             <Text style= {{fontSize:17, marginLeft: -370, marginBottom: -30, marginTop: 75, opacity:'70%'}}> 📍 </Text>


          <Text style={styles.local}> Localização </Text>

          <Text style={styles.publicacao}> PUBLICAÇÕES </Text>

    </View>

     <View style={styles.view3}>


      <TouchableOpacity style={styles.publi}>

            <TouchableHighlight    style = {{marginTop: 3, marginBottom: -15, marginLeft: 10}}> 
      <Text style= {{fontSize:26, fontWeight: 'bold', marginTop: -12}}>... </Text>
        </TouchableHighlight>
     
        <Image style= {styles.produto}
        source={require('../Images/brinquedo.jpeg')}></Image>

        <Text style={{textAlign: 'center'}}> Nome do Produto </Text>
      </TouchableOpacity> 



      <TouchableOpacity style={styles.publi}>

            <TouchableHighlight    style = {{marginTop: 3, marginBottom: -15, marginLeft: 10}}> 
           <Text style= {{fontSize:26, fontWeight: 'bold', marginTop: -12}}>... </Text>
        </TouchableHighlight>
     
        <Image style= {styles.produto}
        source={require('../Images/brinquedo.jpeg')}></Image>

        <Text style={{textAlign: 'center'}}> Nome do Produto </Text>
      </TouchableOpacity> 

    
     </View>

       <TouchableOpacity style={styles.criar}>
      <Text style={{textAlign: 'center', fontSize: 50, position: 'absolute', color: '#fff'}}> + </Text>
     </TouchableOpacity>

    </View>

    
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: '95%',
    marginTop: '25%'
   
  },

  view:{paddingTop:100,
        marginTop:-140,
        backgroundColor: '#34816F',
        alignContent: 'space-between',
        flexDirection: 'column',
        flex: 0.5},

  
  
  icon:{width: 100,
        height: 100,
        borderRadius: 100, 
        marginBottom:'%90',
        marginTop: 75,
        marginLeft: 12},

  nome:{ color: '#ffff',
         marginLeft: 114,
         marginTop: -70,
         fontSize: 17,
         fontFamily: 'Montserrat',
         fontWeight: 'bold'},

  view2:{ flexDirection: 'row' },

  estrela: {marginLeft: 110,
           marginRight: -118,
            marginTop: 4},

  editar:{backgroundColor: '#34816F',
           borderRadius: 100,
           padding: 5,
           marginLeft: 155,
           width: 100,
           height: 30,
           marginTop: 37 },

  local: {  
         marginBottom: -65,
         marginTop: 70,
         fontSize: 23,
         fontFamily: 'Montserrat',
         color: '#699B8F'} ,

  publicacao:{ color: '#34816F',
               fontSize: 20,
               fontFamily: 'Montserrat',
               fontWeight: 'bold',
               marginTop: 115,
               marginBottom: -60,
               marginLeft: -150},

  view3:{ backgroundColor: '#E5E5E5',
           flex: 0.5,
          marginBottom: -290,
          marginTop: 70,
          padding: '26%',
          borderTopEndRadius: 35,
          borderTopStartRadius:35,
          flexDirection: 'row'},

  publi:{ backgroundColor: '#fff',
          borderRadius: 18, 
           width: 170,
           height:200,
           marginTop: -80,
           marginRight: 110,
           marginLeft: -89,
           border: 0.5,
           borderColor: '#C5C5C5'},

  produto:{ width: 135,
                height: 140,
                border: 14,
                marginBottom: 8,
                marginTop:13,
                marginLeft: 17},

  criar:{ backgroundColor: '#34816F',
          borderRadius: 100,
          width: 60,
          height: 60,
          marginBottom: -250,
          marginTop: 200,
          marginLeft: 290}
});