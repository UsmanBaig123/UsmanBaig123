import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import axios from 'axios';

const App = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {

        let comments=response.data
    console.log(comments)
        for(let i=0; i<10; i++)
        {
          console.log(
          comments[i].postId)
        }
      })
      .catch(function (error) {
      
        alert(error.message);
      })
      console.log(response)
      
  };


  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Comments</Text>
      </TouchableOpacity>
      </View>

  );}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;