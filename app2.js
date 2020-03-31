var express = require("express");

var app = express();

app.get('/',function(req,res)
{
    res.sendfile('index.html');

})


app.get('/login',function(req,res)
{
    res.sendfile('login.html');

})

app.get('/adminmenu',function(req,res)
{
    res.sendfile('adminmenu.html');

})

app.listen(3001,()=>
{
    console.log("server is running");
})
