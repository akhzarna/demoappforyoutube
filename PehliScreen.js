import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function MyScreen() {
  
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');

  const navigation = useNavigation();

  const goAhead = () => {
  navigation.navigate('JoMarziName', {datalaylo:432});
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}> This is Pehli Screen</Text>

      <TouchableOpacity style={styles.button} onPress={goAhead}>
        <Text style={{color:'white'}}> Go Ahead </Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
});
