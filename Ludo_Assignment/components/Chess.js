import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
export default function Chess() {
  
  return (

  <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:"white",
  justifyContent:'center'
  },
  wrapper:{
    backgroundColor:'white',
    justifyContent:'center'
},
row:{
    flexDirection:'row',
    flex:1,
    backgroundColor:'white',
    alignItems:'flex-start',
    justifyContent:'center'
},
blackBox:{
    backgroundColor:'black',
    width:30,
    height:30
},
whiteBox:{
    backgroundColor:'grey',
    width:30,
    height:30
} 
});