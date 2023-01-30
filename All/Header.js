import {} from "react";
import { View, Text,StyleSheet ,TouchableOpacity} from "react-native";

export default function Header({toogle_nav}) {
     
  return (
    <>
      <View style={HeaderStyle.header}>
        <View style={HeaderStyle.headerInner}>
          <View style={HeaderStyle.headerE1}>
               <TouchableOpacity onPress={()=>toogle_nav()}>
               <Text style={HeaderStyle.navValue}>{"\u2630"}</Text>
               </TouchableOpacity>
          </View>
          <View style={HeaderStyle.headerE2}>
               <Text style={HeaderStyle.headerText}>My App</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const HeaderStyle = StyleSheet.create({
     header:{
          height:90,
          width:'100%',
          backgroundColor:'#949494'
     },
     headerInner:{
          height:'100%',
          width:'100%',
          display:'flex',
          flexDirection:'row',
          justifyContent:'flex-end',
          paddingTop:25
     },
     headerE1:{
         flex:0.13,
         justifyContent:"center",
         alignItems:'center'
     },
     headerE2:{
          flex:0.87,
          justifyContent:'center',
          alignItems:'center'
      },
      navValue:{
          fontSize:20,
          fontWeight:'bold'
      },
      headerText:{
          fontSize:35,
          fontWeight:'bold',
          marginRight:50
      }
})