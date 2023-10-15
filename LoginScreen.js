import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import PostAPIHooks from './APIHooks/PostAPIHooks';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SectionList } from 'react-native';

import axios from 'axios';

export default function LoginScreen() {
  
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');

  const navigation = useNavigation();
  const {data, signup} = PostAPIHooks();

  const [myFlag, setMyFlag] = useState(110);

  const DATA = [
    {
      title: 'A',
      data: ['Ali', 'Akhzar', 'Akbar', 'Allah Bakhsh'],
    },
    {
      title: 'B',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'C',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'E',
      data: ['Cheese Cake', 'Ice Cream'],
    },
    {
      title: 'F',
      data: ['Cheese'],
    },
  ];

  const loginBtnPressed = () => {
    // signup('akhzar12@gmail.com', '1234567890', 'Akhzar Nazir');
    // myFlag=myFlag+20;
    // setMyFlag(myFlag+90);
    // console.log(myFlag);
    navigation.navigate('Home',{value:1000});
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}> Login Screen! my Flag is = {myFlag} </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="User Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={passsword}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={{color:'white'}}>Sign In</Text>
      </TouchableOpacity>

      {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
     
      renderItem={({item}) => (
        <View style={{
          backgroundColor:'grey',
          height:40,
          }}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      
      renderSectionHeader={({section: {title}}) => (
       <View style={{
        backgroundColor:'green',
        height:50
        }}>
        <Text style={styles.header}>{title}</Text>
        </View>
      )}
      /> */}

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
