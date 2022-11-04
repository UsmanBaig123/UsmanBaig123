import React from 'react';
import { StyleSheet, Text, View ,Image,  TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default function image(){
return(
  <View style={styles.container}>
  <Text >usman</Text>

  <TouchableOpacity onPress={() => console.log("whatsapp image pressed")}>
  <Image source={require("./assets/whatsapp.png")}/> 
  </TouchableOpacity>
 
  <TouchableWithoutFeedback  onPress={() => console.log("google image pressed")}>
  <Image 
  // blurRadius={0} it will blur the image
  source={{
    width:200,
    height:300,
    uri:"https://picsum.photos/200/300"}}/> 
    </TouchableWithoutFeedback>

    
  </View>
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
    
    })

  


