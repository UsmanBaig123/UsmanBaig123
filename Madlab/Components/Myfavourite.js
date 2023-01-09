import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function MyFavourites({ navigation }) {
  const [com, setcoment] = useState([]);
  const [data, setdata] = useState('');
  const [UserName, setUserName] = useState('');
  const getuserdata = async () => {
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      const selectEliment = json.filter(item => item.userId == 4)
      setdata(selectEliment);
      const response2 = await fetch('https://jsonplaceholder.typicode.com/comments')
      const coment = await response2.json();
      
      var finterarry = json2.filter((val) => {
        if (val.postId == '1') {
          return val
        }
      })
      setcoment(coment);
      console.log(coment);

    const SetTitle = json.filter(title => title.id == 40).map(filteritem =>
      filteritem.title)
    const SetBody = json.filter(title => title.userId == 4).map(filteritem =>
      filteritem.body)
    const Setid = json.filter(title => title.id == 40).map(filteritem =>
      filteritem.id)
    const Setuserid = json.filter(title => title.userId == 4).map(filteritem =>
      filteritem.userId)
    settitle(SetTitle)
    setuserid(Setuserid)
    setbody(SetBody)
    setid(Setid)
    }
    catch (error) {
      console.error(error);
    };
  };
useEffect(()=>
  {
    
  }
)

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }} >
              
              <View style={styles.box2}>
              <Text style={[styles.userid]}>UserId: {item.userId}              ID: {item.id}</Text>
            <Text style={{fontWeight:'bold'}}> Title of post:</Text><Text style={styles.myText1} > {item.title}</Text>
            <Text style={{fontWeight:'bold'}}> Body of post:</Text><Text style={styles.myText2} > {item.body}</Text>
            </View>

            </View>
          )}
          keyExtractor={item => item.id}
        />

        <View style={styles.show}>
         
          
          <Pressable onPress={()=> getuserdata()}> 
          <Text style={{color:"white", backgroundColor:"purple",fontSize:27,margin:15,padding:7,borderWidth:1,borderRadius:10}}> show</Text>
          </Pressable>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',

  },
  userid: {
    padding: 7,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
    fontSize: 22,
    fontWeight: "700",
    margin: 10,
  },
  box2:{
    backgroundColor:"#00ced1",
    width:320,
    height:200
  },
  myText1:{
    fontSize: 14,
    // margin : 1,
    marginBottom:15
  },
  myText2:{
    fontSize: 13,
    // margin : 1,
  },
  show:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
  },
  id: {
    padding: 5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "lightgrey",
    borderColor: "black",
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
    marginTop: 5,
  },


  title: {
    padding: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    fontSize: 17,
    margin: 10,
    marginTop: 5,
  },
  body: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    fontSize: 20,

    margin: 10,
    marginTop: 5,
  },
  txtHeader: {
    borderWidth: 1,
    borderRadius: 15,

    height: "30%",
    backgroundColor: "pink",
    justifyContent: "center",
    marginTop: 10,
    alignContent: "center",
    alignItems: "center"
  }
})