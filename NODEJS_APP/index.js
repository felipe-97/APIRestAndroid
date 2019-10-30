//1. call mysql package
const mysql = require('mysql');
//2. call express package
const express = require('express');
//3. call body-parser package
const bodyparser = require('body-parser');
//4. create a new express app instance
var app= express();

//5. enable body parser (json) request
app.use(bodyparser.json());

//create mysql database connection
var mysqlConnection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'market'
});

//Validate mysql data base connection
mysqlConnection.connect((err)=>{
    if(!err)
    console.log('::: Succesfull connection :::');
    else
    console.log('::: Data Base Connection Failed:::' + JSON.stringify(err,undefined,2));  


});

app.listen(3000,()=>console.log('::: Server us runnig at port 3000 :::'));  

//Read all users in Data Base
app.get('/users',(req,res)=>{
mysqlConnection.query('SELECT * FROM users',(err,rows,fields)=>{
if (!err){
    console.log(rows);
    res.send(rows);
}else{
    console.log(err);
}
 
})

});    