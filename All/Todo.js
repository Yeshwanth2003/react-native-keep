import {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { Empty } from "./Card";

export default function Todo({ from, getTasksList,updateTaskList,deleteTaskList }) {
  function buildTasksStack() {
     const tasks = getTasksList(from);
     if(tasks.length!==0){
      return (
        <>
        {tasks.map(elem=>{
          return (
            <View style={TodoStyle.taskCard} key={(Math.random()*elem.length).toString()}>
            <View style={TodoStyle.taskText}><Text style={TodoStyle.taskTextT}>{elem}</Text></View>
            <TouchableOpacity onPress={()=>deleteTask(elem)}>
            <View style={TodoStyle.taskDelete}><Text style={TodoStyle.taskDeleteT}>{"🗑"}</Text></View>
            </TouchableOpacity>
           </View>
          )
        })}
        </>
      )
     }
     return <Empty></Empty>
  }
  let valueToBeAdded="";
  function updateTasks(){
    if(valueToBeAdded==="")return
     updateTaskList(from,valueToBeAdded)
  }
  function deleteTask(value){
      deleteTaskList(from,value)
  }
  function setTextValue(value){
    valueToBeAdded=value
  }
  return (
    <>
    <View style={TodoStyle.todoOverall}>
      <View style={TodoStyle.inputField}>
        <View style={TodoStyle.inputWrapper}>
          <TextInput
            placeholder="Add Tasks...."
            multiline
            style={TodoStyle.input}
            onChangeText={setTextValue}
          ></TextInput>
          <TouchableOpacity onPress={()=>{updateTasks()}}>
            <View style={TodoStyle.addButton}>
               <Text style={TodoStyle.addButtonText} >Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={TodoStyle.PageHeading}>
        <Text style={TodoStyle.PageHeadingText}>{from}</Text>
      </View>
      <View style={TodoStyle.List}>
      <ScrollView style={TodoStyle.ListScroll}>
          {buildTasksStack()}
          </ScrollView>
      </View>
     </View>     
    </>
  );
}

const TodoStyle = StyleSheet.create({
  inputField: {
    width: "100%",
    height: 50,
  },
  inputWrapper:{
     flexDirection:'row',
     justifyContent:"space-between",
     alignItems:"center",
     borderBottomColor:'black',
     borderBottomWidth:2,
     backgroundColor:'#636666'
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: '70%',
    backgroundColor:'aliceblue',
    borderRadius:10,
    paddingHorizontal:10,
    fontWeight:'bold'
  },
  addButton:{
     backgroundColor:'pink',
     paddingHorizontal:10,
     marginHorizontal:10,
     paddingVertical:5,
     borderRadius:100
  },
  addButtonText:{
     fontWeight:'bold',
     fontSize:20
  },
  todoOverall:{
     width:'100%',
     height:'100%',
  },
  List:{
    height:620
  },
  ListScroll:{
    backgroundColor:'#f2f7f4',
    marginHorizontal:10,
    marginVertical:5,
    borderRadius:10
  },
  PageHeading:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  PageHeadingText:{
      fontSize:30,
      fontWeight:'bold',
      fontStyle:'italic',
  },
  taskCard:{
    backgroundColor:"#a7a7f2",
    marginHorizontal:2,
    marginVertical:8,
    flexDirection:'row',
    justifyContent:"space-between",
    padding:10,
    borderRadius:10
  },
  taskTextT:{
    fontWeight:"bold",
    fontSize:18
  },
  taskText:{
    flex:1
  },
  taskDeleteT:{
    fontSize:24
  },
  taskDelete:{
    alignItems:'center',
    justifyContent:'center'
  }
});
