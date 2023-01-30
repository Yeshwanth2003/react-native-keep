import { useEffect, useState } from "react";

export default function DB(){

     let[db,setDb] = useState([{
          key:1,
          title:"To-Do's",
          tasks:[]
     },
     {
          key:2,
          title:"Daliy Tasks",
          tasks:[]
     }])

     function addTask(titleName){
           let obj ={
             key:(db.length+1),
             title:titleName,
             tasks:[]
           } 
          setDb([...db,obj])
     }

     function deleteTask(taskName){
          db = db.filter(elem=>elem.title!=taskName)
          setDb(db)
     }

     function getTasksList(titleName){
        let obj = db.find((value)=>{
          return value.title===titleName
        })
        return obj.tasks
     }

     function updateTaskList(from,value){
          db = db.filter(elem=>{
               if(elem.title===from){
                    elem.tasks=[value,...elem.tasks]
               }
               return elem
          })
          setDb(db)
     }
     function deleteTaskList(from,value){
          db = db.filter(elem=>{
               if(elem.title===from){
                    let index = elem.tasks.indexOf(value);
                    elem.tasks.splice(index,1);
               }
               return elem
          })
          setDb(db)
     }

     return {db,addTask,deleteTask,getTasksList,updateTaskList,deleteTaskList};
}