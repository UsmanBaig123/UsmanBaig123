import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text,  Dimensions} from 'react-native';
import * as location from "expo-location"
import MapView, { Circle, Marker } from 'react-native-maps';

// Function to get permission for location

export default function map() {

  
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude:33.780295,
        longitude:72.3523202,
        latitudeDelta:0.005,
        longitudeDelta:0.0005
      }}>
        <Marker
        coordinate={{latitude:33.780295,longitude:72.3523202}}
        draggable={true} 
        >

        </Marker>
        <Circle center={{latitude:33.780295,
        longitude:72.3523202}}
        radius={100}/>
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    width: Dimensions.get("screen").width,
    height:Dimensions.get("screen").height
  }
});