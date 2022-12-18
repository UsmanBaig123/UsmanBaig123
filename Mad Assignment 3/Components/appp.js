import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet,  Text, View ,FlatList , Pressable} from 'react-native';
import Flatlist from './components/flatlist';
import Sectionlist from './components/Sectionlist';
import Usestate from './components/usestate';
import button_and_onpress from './components/button_and_onpress';
import Log_in_page from './components/Log_in_page';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Signuppp(){
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

  <Pressable
    onPress={()=>
    navigation.navigate("Signup")}>
  <Text style={styles.box3}>Sign up</Text>
  </Pressable>

  </View>
  );
}

function Signinnn() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Pressable
    onPress={()=>
    navigation.navigate("Signin")}>
  <Text style={styles.box3}>Sign in</Text>
  </Pressable>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Signin" component={Signin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}