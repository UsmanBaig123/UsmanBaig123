import {useState, useEffect} from 'react';
import { Text,StyleSheet, View, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyFavourites from './Components/Myfavourite';
import todo from './Components/todos';
import settings from './Components/settings';

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  const [UserName, setUsername] = useState('')
  const GetUserName = async()=>{
  
    const getUsername = await AsyncStorage.getItem('USERNAME');
    
     setUsername(getUsername)
   
  
     if(getUsername==null,getUsername=='',getUsername==undefined){
       navigation.navigate('MyFavourites');
     }
   }
   useEffect(() => {
    GetUserName();
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='MyFavourites'
      >
        <Tab.Screen options= {{title:"Usman"}} name="MyFavourites" component={MyFavourites} />
        <Tab.Screen options={{title:"Usman"}} name="MyTodo"   component={todo} />
        <Tab.Screen options={{title:"Usman"}} name="Settings"  component={settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});