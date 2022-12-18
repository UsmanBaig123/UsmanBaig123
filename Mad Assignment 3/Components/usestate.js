import { Text, StyleSheet, View } from 'react-native'
import React, { useState , useEffect } from 'react'

export default function Usestate(){
    const [Count , setCount] = useState(7)
    useEffect(() => { console.log('abc')})
    

    function increment(){
        setCount(preCount => preCount + 1);
    }

    function decrement(){
        setCount(preCount => preCount - 1);
    }

    return (
      <View style={styles.container}>
        <button style={styles.size} onClick={increment}>+</button>
        <Text style={styles.size} >{Count}</Text>
        <button style={styles.size} onClick={decrement}>-</button>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
      },
      size:{
        fontSize:70,

      }
})