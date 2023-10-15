import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function NewName({navigation, route}) {
  
  const {datalaylo} = route.params;
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');
  // const navigation = useNavigation();

  const goBack = () => {
  navigation.navigate('Pehli');
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}> This is Nae</Text>
      <Text style={{fontSize:50}}> This is Nae</Text>
      <Text style={{fontSize:50}}> Data get from Pevious is = {datalaylo} </Text>

      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={{color:'white'}}> Go Back </Text>
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
