import React from 'react';
import { StyleSheet, Text, SafeAreaView ,Image, View } from 'react-native';

export default function ahsan_login_page(){
return(

  <SafeAreaView style={[styles.container, containerstyle]}>
  <View style={styles.box4}>
    <Image style={styles.Imagesi}
    source = {require("./assets/beats.png")}>
      
    </Image>
  </View>

  <View> 
  <Text style={styles.box1}>beatsmusic</Text>
  </View>

  <View> 
  <Text style={styles.box3}>Sign up</Text>
  </View>

  <View> 
  <Text style={styles.box6}>Log in</Text>
  </View>

  </SafeAreaView>
);
}
const containerstyle={backgroundColor:'red'}
const styles=StyleSheet.create(
  {
    container:{
      flex:1,
    
    justifyContent:'center',
    alignItems:'center',
  },
  
  box1:{  
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    fontSize: 40,
    fontWeight:'bold',
    marginBottom:10

  },

  box3:{
    marginTop:290,
    
    width: 130 , 
    height:35,
    borderRadius:6,
    color:'red',
    backgroundColor:"white",
    textAlign:"center",
    justifyContent:'center',
    fontSize: 18,
  },
  Imagesi:{
   
    width:80,
    height:80
  },
  box4:{
    
    width:80,
    height:80
  },

  box6:{
    marginTop:30,
    
    width: 130 , 
    height:35,
    borderRadius:6,
    borderColor:"white",
    borderWidth:1,
    textAlignVertical: 'center',
    color:'white',
    textAlign:'center',
    fontSize: 18, 
  },
  
}
    )

  


