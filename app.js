const express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./mongoose_db') // var {mongoose}
var {Users}=require('./userModels');

var app = express()
app.use(bodyParser.json());


app.post('/users',(req,res)=>{
var users = new Users({
    name: req.body.name
    // age:45
});
users.save().then((doc)=>{
    res.send(doc);
   },(error)=>{
       res.status(400).send(error); 
   } )

})





 app.listen(3000,()=>{
     console.log('started');
 })