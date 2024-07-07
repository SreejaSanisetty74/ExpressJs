var express=require('express');
var app=express();
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
})
app.get('/get_example2',function(req,res){
    res.send('<p>FirstName:'+req.query['firstname']+'</p> <p>LastName'+req.query['lastname']+'</p> <p>Password:'+req.query['password']+'</p> <p>About You:'+req.query['aboutyou']+ '</p> ');
})
var server=app.listen(8000,function(){
    
})

