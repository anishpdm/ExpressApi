const express = require('express');
var bodyParser = require('body-parser');

var {mongoose}= require('./mongoose_db') 
var {Users}=require('./userModels');

var app = express()
app.use(bodyParser.json());


// For CORS,Pgm Line no 12 to 29
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200' );

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/users/admno/:num',(req,res)=>{
   
        var id=req.params.num;
        console.log(id);
        Users.find({
            admno:id
        }).then( (data)=>{
    
    if(!data){
        return  res.status(400).send()
    }
    
    res.send(data);
    
        }).catch( (e)=>{
            res.status(400).send()
        }  )
    });

// Find By Id
app.get('/users/:userId',(req,res)=>{
//    console (req.params);
    var id=req.params.userId;
    Users.find(id).then( (data)=>{

if(!data){
    return  res.status(400).send()
}

res.send(data);

    }).catch( (e)=>{
        res.status(400).send()
    }  )
});



 

/// API- FetchAll Users  

app.get('/users',(req,res)=>{

    Users.find().then( (userdata)=>{
res.send(userdata
//     {userdata,
//     // status:'success'
// }

);
},(error)=>{
    res.status(400).send("Error happened"+error);  
} );

});

/// API- Create Users  
app.post('/users',(req,res)=>{
var users = new Users({
    name: req.body.name,
    age: req.body.age,
    rollno: req.body.rollno,
    admno: req.body.admno,
    college: req.body.college
   
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