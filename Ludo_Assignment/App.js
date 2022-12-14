import { View, StyleSheet } from "react-native";


export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <View style={[{ backgroundColor: "green" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "darkgreen",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 150,
            width: 75,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />

          <View style={styles.whitebox} />

          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />

          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />

          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />

          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />

          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />

          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "yellow" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
        </View>

        <View style={[{ backgroundColor: "yellow" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "orange",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 75,
            width: 150,
            flexDirection: "row",

            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "green" }]} />

          <View style={[styles.whitebox, { backgroundColor: "green" }]} />

          <View style={[styles.whitebox, { backgroundColor: "green" }]} />

          <View style={[styles.whitebox, { backgroundColor: "green" }]} />

          <View style={[styles.whitebox, { backgroundColor: "green" }]} />

          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
        </View>

        <View
          style={{
            width: 75,
            height: 75,
            backgroundColor: "#fff",
            flexDirection:"row",
            flexWrap:"wrap",
            borderWidth:25,
            borderRadius:55,
            borderLeftColor:"green",
            borderTopColor:"yellow",
            borderRightColor:"blue",
            borderBottomColor:"red"
            
          }}
        >
            
        </View>

        <View
          style={{
            height: 75,
            width: 150,
            flexDirection: "row",

            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={styles.whitebox} />

          <View style={styles.whitebox} />
          
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />
          <View style={styles.whitebox} />
          
          <View style={styles.whitebox}/>
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={styles.whitebox} />
        </View>



        <View style={[{ backgroundColor: "red" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "darkred",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 150,
            width: 75,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />

          <View style={styles.whitebox} />

          <View style={[styles.whitebox, { backgroundColor: "red" }]} />

          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "red" }]} />

          <View style={[styles.whitebox, { backgroundColor: "red" }]} />

          <View style={[styles.whitebox, { backgroundColor: "red" }]} />

          <View style={[styles.whitebox, { backgroundColor: "red" }]} />

          <View style={[styles.whitebox, { backgroundColor: "red" }]} />
          <View style={styles.whitebox} />

          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
          <View style={[styles.whitebox, { backgroundColor: "blue" }]} />

          <View style={styles.whitebox} />
          <View style={styles.whitebox} />
        </View>




        <View style={[{ backgroundColor: "blue" }, styles.box]}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: "darkblue",
              padding: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />

            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                marginLeft: 5,
                marginRight: 5,
              }}
            />
          </View>
        </View>



      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    backgroundColor: "grey",
    width: 375,
    height: 375,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  whitebox: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: 1,
    padding: 0,
    margin: 0,
  },
});