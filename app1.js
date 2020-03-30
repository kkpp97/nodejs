var express = require("express");

var app = express();

app.get('/',function(req,res)
{
    res.sendfile('index.html');

})

app.get('/about',function(req,res)
{
    res.sendfile('about.html')
})

app.get('/login',function(req,res)
{
    res.sendfile('login.html')
})
app.listen(3005,()=>
{
    console.log("server is running");
})
