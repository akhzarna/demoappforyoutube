import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import getApiHook from './GetApiHook';

export default function NewName({navigation, route}) {
  
  const {data} = getApiHook('https://reactnative.dev/movies.json');
  const {datalaylo} = route.params;
  const [username, onChangeUsername] = useState('');
  const [passsword, onChangePassword] = useState('');

  const goBack = () => {
  navigation.navigate('Pehli');
  }

  useEffect(()=>{
    let myArray = [{key:0, title:'Akhzar'},{key:1, title:'Nazir'}]
    AsyncStorage.getItem('myname').then((data)=>{
      console.log('then area');
      if(data){
        console.log('if area');
        let originalForm = JSON.parse(data);
        console.log('Youtube Channel Lecture Data = ', originalForm[0]);
      }else{
        console.log('else area');
        AsyncStorage.setItem('myname', JSON.stringify(myArray));
      }
    }).catch((error)=>{
      console.log('Error', error);
    })






    AsyncStorage.setItem("data",JSON.stringify(data));
    AsyncStorage.getItem("data")
    .then((data)=>{
      console.log('data[0] == ',data[0]);
      if(data){
        let myData = JSON.parse(data);
        console.log('myData == ',myData[0]);
      }else{
        console.log('Data not Found');
      }
    }).catch((error)=>{
      console.log(error);
    })
    
    
    
    if(data){
        AsyncStorage.getItem("data")
            .then((userData) => {
                console.log('then data');
                if (userData) {
                  console.log('if data');
                    let newuserData = JSON.parse(userData);                    
                    console.log("if data already exist : ", newuserData);
                }else{
                  console.log('userData');
                  AsyncStorage.setItem("data", JSON.stringify(data));
                }
            })
            .catch((error) => {
                console.log('Error',error);
            });
      }else{
        console.log('Not Yet')
      }  
  },[data])

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
