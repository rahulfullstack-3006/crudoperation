var mysql=require('mysql');
var express=require('express');
var app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json())

var mysqlConnection=mysql.createConnection({
    host:'local host',
    user:'root',
    password:'',
    database:'EmployeeDB'

})

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Connection sucessfully')
    }
    else{
        console.log('DB connection failed')
    }
})


app.listen(3000,()=>{
    console.log('server is running at port:3000');
})

app.get('/empolyee',(req,res)=>{
    mysqlConnection.query(`SELECT * from Employee`,(err,data)=>{
  
        if(!err){
            //console.log(data);
            res.send(data)
        }
        else{
            console.log(err);
        }

    })
})


app.get('/empolyee/id',(req,res)=>{
    mysqlConnection.query(`SELECT * from Employee ,where EmpID=?`,{req.params.id},(err,data)=>{
  
        if(!err){
            //console.log(data);
            res.send(data)
        }
        else{
            console.log(err);
        }

    })
})

///Delete

app.delete('/empolyee/id',(req,res)=>{
    mysqlConnection.query(`DELETE FROM Employee ,where EmpID=?`,{req.params.id},(err,data)=>{
  
        if(!err){
            //console.log(data);
            res.send('Deleted successfully')
        }
        else{
            console.log(err);
        }

    })
})