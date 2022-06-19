import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Divider } from 'react-native-paper';
import { Feather }  from "@expo/vector-icons";

export default function App() {
  return (
    <View style={{flex:"1"}}>
        <View style={{marginTop:"15%", flexDirection:"row"}}>
        <TouchableOpacity style={{alignSelf:"left"}}>
              <Feather
              name='chevron-left'
              size={27}
              color="#f5cae6"
              />
            </TouchableOpacity>
          <Text style={{marginHorizontal:"32%", fontWeight: "bold", color:"#34816F" }}> Notificações </Text>
            
        </View>

        <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000" >
            <Feather
              name='alert-circle'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%"}}> Você recebeu uma denúncia, veja. </Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            
            <Feather
              name='gift'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Obrigado por doar 50 coisas, você acaba de ganhar um selo especial! </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='award'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Sua doação acaba de ultrapassar 100+ inscrições! </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='message-square'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Murilo Cavalcanti: posso fazer a entrega na estação Pinheiros ou... </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='award'
              size={20}
              color="#34816F"
              />
            <Text style={{marginHorizontal:"12%", marginVertical: "-11%"}}> Sua doação acaba de ultrapassar 50+ inscrições! </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}
            title="OI"
            color="#0000">
            <Feather
              name='award'
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

//const Tab = createBottomTabNavigator();

//export default function App() {
//  return (
//    <NavigationContainer>
//      <Tab.Navigator>
//        <Tab.Screen name="Notificações" component={NotificationsScreen} />
//      </Tab.Navigator>
//    </NavigationContainer>
//  );
//}

const styles = StyleSheet.create({
  touchable:{
    backgroundColor:'white',
    marginTop:'0.8%',
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 4.5, 
    borderColor: '#f5cae6',
    width: '95%',
    height:"9%",
    borderRadius : 5 ,
    paddingVertical : 10 , 
    paddingHorizontal : 12, 
    marginTop: '1%'
  
  },

  container:{
    backgroundColor:"#34816F", 
    marginTop:"4%", 
    width:"95%",
    borderWidth: 2, 
    borderColor: '#34816F',
    borderRadius : 5 ,
    alignSelf:"center",
    height:"70%",
    

  },
  });
