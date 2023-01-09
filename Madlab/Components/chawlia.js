import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View,  useState, TouchableWithoutFeedback,Button, Alert } from 'react-native';

export default function button_and_onpress(){
  const [Count , setcount]=useState(0)
  useEffect=() => { console.log({Count})
}

    function increment(){
      setcount(preCount => preCount + 1 );
    }
    function decrement(){
      setcount(preCount => preCount - 1);
    }
return(
  <SafeAreaView style={styles.container}>
    <Button 
    onClick={increment}
    color="orange"  
    title="click me" onPress={() => console.log("Button pressed")}>+</Button>
    <Text style={styles.size}>{Count}</Text>
    <Button
    color="yellow"  
    title="click me again" 
    onPress={() => Alert.alert("warning", "your app is processing", [
      {text:"yes", onPress:()=> console.log("yess is pressed") },
      {text:"no", onPress:()=> console.log("no is pressed") },
    ])} />
    
    <Button
     color='gray'
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
  ,
      size:{
        fontSize:70,

      }
    })

  


    // import { Text, StyleSheet, View } from 'react-native'
    // import React, { useState  } from 'react'
    
    // export default function counters(){
    //   const vowel=['a','e','i','o','u']
    //   var counter=0
    
    //     const names = ["aeioughaeiou","aeiouaeiou","aeihklm"];
    //     for (var i=0; i < 3; i++) {
    //       for (var j=0; i < names[i].length; i++) {
    //       if(names[j].split().includes(vowel[j])){
    //         counter=counter+1
    //         if(counter>3)
    //         {
    //           names[i].map(result)
    
    //         }
    
    //         console.log(result);
    
    //       // }
          
    //       // elseif(names[i].includes('a'||'e'||'i'||'o')){
            
    //       //   names[i].map(result)}
    
    
    
        
    //     // for (var i=0; i < 3; i++) {
    //     //   if(names[i].includes('a'||'e'||'i'||'o'||'u')){
    
    //     //   }
          
    //     //   elseif(names[i].includes('a'||'e'||'i'||'o')){
            
    //     //     names[i].map(result)}
    
          
    
    //     var result=[]
    //     return (
    //       <View>
            
    //        {/* {names.filter(names => names.includes('a'||'e'||'i'||'o'||'u')).map(result => ( */}
            
    //          <Text>
    //            {result}
    //          </Text>
    //        {/* ))} */}
    //      </View>
    //     )
    //   }
    
    // const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         backgroundColor: "#fff",
    //         alignItems: "center",
    //         justifyContent: "center",
            
    //       },
         
    // })
    