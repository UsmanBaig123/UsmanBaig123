// import React from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StyleSheet,  Text, View ,FlatList , Pressable} from 'react-native';
// import Flatlist from './components/flatlist';
// import Sectionlist from './components/Sectionlist';
// import Usestate from './components/usestate';
// import button_and_onpress from './components/button_and_onpress';
// import Log_in_page from './components/Log_in_page';
// import Signin from './components/Signin';
// import Signup from './components/Signup';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function Signuppp(){
//   return (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

//   <Pressable
//     onPress={()=>
//     navigation.navigate("Signup")}>
//   <Text style={styles.box3}>Sign up</Text>
//   </Pressable>

//   </View>
//   );
// }

// function Signinnn() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//   <Pressable
//     onPress={()=>
//     navigation.navigate("Signin")}>
//   <Text style={styles.box3}>Sign in</Text>
//   </Pressable>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Signup" component={Signup} />
//         <Tab.Screen name="Signin" component={Signin} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
// import react from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './Components/LoginScreen';
// import HomeScreen from './Components/HomeScreen.js';
// import SignupScreen from './Components/SignupScreen';
// import * as location from "expo-location"
// import MapView, { Circle, Marker } from 'react-native-maps';
// import map from './Components/map';



// export default function App(){
//    const Stack = createNativeStackNavigator();
//   return(
// <View style={styles.container}> 
//      <NavigationContainer>
//    <Stack.Navigator initialRouteName='Login'>
//        <Stack.Screen name='Login' component={LoginScreen}/>

//       <Stack.Screen name='Home' component={HomeScreen}/>
//       <Stack.Screen name='Signup' component={SignupScreen}/>
//       <Stack.Screen name='map' component={map}/>
//      </Stack.Navigator>
//      </NavigationContainer>
    
   
//     </View>

//   )
// }



// const styles = StyleSheet.create({
// container:{
//   flex:1,
//   justifyContent:"center",
  
// }

// })