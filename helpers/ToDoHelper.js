var db = require('../config/connection')
ObjectId = require('mongodb').ObjectId
const { response } = require('express');
module.exports={

    ToDoList:(ToDo)=>{
        db.get().collection('ToDo').insertOne(ToDo).then(()=>{
            console.log("stored",ToDo);
        })
    },
    getAllToDolist:()=>{
       return new Promise(async(resolve,reject)=>{
        let allToDo =await db.get().collection('ToDo').find({}).toArray()
            resolve(allToDo)
        
       })
    },
    deleteToDo:(ToDoId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection('ToDo').deleteOne({_id:ObjectId(ToDoId)}).then((response)=>{
                resolve(response)
            })
        })
    }
    
}
