import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Upload({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text>Tela para desenvolver Upload!</Text>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('async')}>
       <Text style={styles.acesso}>  Banco de DADOS </Text>
       </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});