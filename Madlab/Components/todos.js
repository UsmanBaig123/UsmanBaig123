import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const todo = () => {
  const [data , setdata ] = useState([]);  
  const Item = ({ item, backgroundColor }) => (

    <SafeAreaView style={[styles.item, backgroundColor]}>
      <View >

        <View>
       <Text>{item.userId}</Text>
        </View>

        <View >
        <Text style={[styles.title]}>{item.title}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  )
 
  const getApi = async () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        var array = [];
        json.forEach(data => {
          if (data['userId'] == 4) {
            
            
              array.push(data); 
            
          }
        })
        const filteritem = array.slice(0,5);
        setdata(filteritem);
      })
      .catch(error => {
        console.error(error)
      })
  };
  const renderItem = ({ item }) => {
    return (
      
      <Item
        item={item}
        backgroundColor= {item.completed? styles.comt : styles.comf}
        textColor={{ color :"white"}}
        
      />
    )
  }
  useEffect(() => {
    getApi()
  })

  return (
    
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text}> Todo List </Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#fffaf0',
        alignItems: 'center',
        
      },
      comf:{
        backgroundColor:"red"
      },
      comt:{
        backgroundColor:"green"
      },
      item: {
        padding: 5,
        borderRadius: 5,
        borderColor: 'silver',
        borderWidth: 1,
        width: '95%',
        margin: 5,
      },
      text:{
        fontSize:30,
        marginBottom:5,
        
      },
      title: {
        fontSize:10,
        textColor:'white'
      },
      list: {
        padding: 5,
        flexDirection: 'row',
        borderRadius: 5,
        marginLeft: 25,
        marginRight: 25,
        
      },
})

export default todo
