import * as React from 'react';
import { Text, View } from 'react-native';
import Log_in_page from './components/Log_in_page';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Insta from './Components/Insta';
import { NavigationContainer } from '@react-navigation/native';
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

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Insta" component={Insta} />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Signin" component={Signin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}