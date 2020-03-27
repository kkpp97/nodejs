var express = require("express");
var app = express();

app.get('/',function(req,res)
{
    res.sendfile('index.html');

})

app.get('/home',function(req,res)
{
    res.sendfile('home.html')
})

 app.get('/registration',function(req,res)
 {
     res.sendfile('registration.html')
 })

app.listen(3000,()=>
{
    console.log("server is running");
})
