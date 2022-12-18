import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View,  TouchableWithoutFeedback,Button, Alert } from 'react-native';

export default function button_and_onpress(){
return(
  <SafeAreaView style={styles.container}>
    <Button
    color="orange"  
    title="click me" onPress={() => console.log("Button pressed")} />

    <Button
    color="yellow"  
    title="click me again" 
    onPress={() => Alert.alert("warning", "your app is processing", [
      {text:"yes", onPress:()=> console.log("yess is pressed") },
      {text:"no", onPress:()=> console.log("no is pressed") },
    ])} />
    
    <Button
     
    title="click me again again" 
    onPress={() => 
      Alert.prompt("tittle" , "message" ,text => console.log(text))} />


  <Text >usman</Text>
  <TouchableWithoutFeedback onPress={() => console.log("enter is pressed")}>
    
  <View  style={styles.box} > 
  <Text >Enter</Text>

  </View>
  </TouchableWithoutFeedback>
  </SafeAreaView>
);
}

const styles=StyleSheet.create(
  {
    container:{
      flex:1,
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    width: 100 , 
    height:40,  
    backgroundColor:"yellow",
    justifyContent:'center',
    alignItems:'center'
  }
    })

  


