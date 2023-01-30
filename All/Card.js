import {} from "react";
import { View, Text, StyleSheet,Image } from "react-native";

export default function Card(props) {
  return (
    <>
      <View style={CardStyle.card}>{props.children}</View>
    </>
  );
}

export function Empty(){
     return(
          <>
          <View style={CardStyle.emptyDiv}>
            <Text style={CardStyle.emptyText}>No Tasks....!</Text>
            <Text style={CardStyle.emptyText}>Add Some If Any</Text>
          </View>
          </>
        )
}

const CardStyle = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginVertical: 10,
    height: 50,
    backgroundColor: "#adb0fe",
    borderRadius: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection:'row',
    alignItems:'center'
  },
  emptyText:{
     alignSelf:'center',
     fontWeight:'bold',
     fontSize:20,
  }
  
});
