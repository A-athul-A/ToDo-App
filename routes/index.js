var express = require('express');
var router = express.Router();
var ToDoHelper = require('../helpers/ToDoHelper')

/* GET home page. */
router.get('/', function(req, res, next) {
  let allToDo = ToDoHelper.getAllToDolist().then((allToDo)=>{
    res.render('index',{allToDo});
  })
  
});
router.post('/',(req,res)=>{
  console.log(req.body);
  ToDoHelper.ToDoList(req.body)
  res.redirect('/')
})

router.get('/delete-ToDo/:id',(req,res)=>{
  let ToDoId = req.params.id
  ToDoHelper.deleteToDo(ToDoId).then((response)=>{
    res.redirect('/')
  })
})
 
module.exports = router;
