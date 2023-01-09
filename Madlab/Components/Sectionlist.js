import react from "react";
import {View, SectionList , Text , StyleSheet} from 'react-native';


const Data =[
    {
        title:'City A',
        data:['Paksitan', 'india' , 'AFGHANISTAN']
    },
    {
        title:'City b',
        data:['nigaria', 'Canada' , 'TajakISTAN']
    },
    {
        title:'City c',
        data:['UK', 'DUBAI' , 'Saudia']
    },
    
]
     
     const Item =({title}) =>(
     <View style={styles.item}> 
     <text style={styles.title}>{title} </text>
     </View> 
    )
// const Item =({title})=>(
// <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
// </View>
// )
export default function Sectionlist(){
    return (
        <view style={styles.container}>
        <SectionList sections={Data} renderItem={({item})=> <Item title={item}></Item>}

         renderSectionHeader={({section:{title}})=> (
         <view> 
        <Text style={styles.header}>{title} </Text> 
        
        </view>
          )}
        />
         </view>

        // <View style={styles.container}>
        //     <SectionList sections={Data} renderItem={({item})=><Item title={item}></Item>} 
            
        //     renderSectionHeader={({section:{title}})=>(
        //         <View>
        //             <Text style={styles.header}>{title}</Text>
        //         </View>
        //     )}
        //     />
        // </View>
    )}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      item:{
        backgroundColor:'yellow',
        marginVertical:10,
        padding:20,
      },
      header:{
        fontSize:30,
      },
      title:{
        fontSize:25,
      }

})