import React, { useState, useEffect  } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

import * as Location from 'expo-location';
 
const settings = () => {

    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
     
     const [loctext,settext] = useState('')
     const [loc,setloc] = useState('')
    useEffect(() => {
      (async () => {
      
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
           return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(location.coords)
        setLocation(address);
        
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      
    }
 const [bgcolor , setbgcolor] = useState('white')
 
 const  LightTheme=()=>{
  let color = '#fffaf0'
  setbgcolor(color)
 }
 const DarkTheme=()=>{
  let color = '#696969'
  setbgcolor(color)
 }
 const getAddress =()=>{
  settext(text)

};

    return (
        <View style={[styles.container,{backgroundColor:bgcolor}]}>
          <Text style={styles.text}> Setting </Text>
       
            <View>
            <TouchableOpacity style={styles.button2} onPress={()=>{ 
          getAddress()
        }}>
                <Text>Get My Address</Text>
                
            </TouchableOpacity>
            <Text> {loctext}</Text>
            </View>
            
            <MapView style={styles.map}
        initialRegion={{
          latitude: 33.780065,
          longitude:  72.3519435,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
         
        <Marker coordinate={{latitude: 33.780065, longitude: 72.3519435}}/>
        <Circle center={{latitude:  33.780065, longitude: 72.3519435}} radius ={100}/>
        </MapView>
        <View style={styles.btnContainer}>
          
          <TouchableOpacity style={styles.button1 } onPress={()=>{LightTheme()}}>
              <Text style={{color: "black"}} >Light Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={()=>{DarkTheme()}}>
              <Text style={{color: "black"}} >Dark Theme</Text>
          </TouchableOpacity>
          </View>
        
            
        </View>
      );




      }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    text:{
      fontSize:30,
      // fontWeight:'bold',
      marginBottom:20,

    },
      btnContainer: {
        flexDirection:"row",
        marginBottom:"7%",
  
      },
      button1: {
        // marginRight:"20%",
        borderRadius: 10,
        elevation: 8,
        padding:8,
        margin:5,
        marginTop:20,
        fontSize: 22, 
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        backgroundColor: "#00ffff",
      },
      button2: {
        
        borderRadius: 10,
        elevation: 10,  
        padding:8,
        backgroundColor: "#00ffff",
        margin:5,
        marginTop:20,
        fontSize: 22, 
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
    map: {
        width: '100%',
        height: '50%',
      },

});

export default settings;

{/* <Text style={styles.paragraph}>{text}</Text> */}