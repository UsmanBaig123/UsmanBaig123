import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function LoginScreen({navigation}) {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
 
  const GetEmailPass = async()=>{
  
   const getemail = await AsyncStorage.getItem();
   const getpassword = await AsyncStorage.getItem();
  

    
      navigation.navigate('map');
    
  }
  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image style={styles.image} source={require("../assets/Smile.png")} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Longitude"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setLongitude(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Latitude"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setLatitude(password)}
        />
      </View>
 
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.loginBtn} onPress={()=>{GetEmailPass()}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb6c1",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    bottom:250,
    width:150,
    height:150,
    
    resizeMode:"cover"

  },
  logoContainer:{
    paddingLeft:20,
    position:"absolute",
    marginTop:70
  },
 
  inputView: {
    backgroundColor: "#ff1493",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"30%",
    marginRight:100
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
  SignupBtn:{
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft:30,
    backgroundColor: "#FF1493",
  },
})