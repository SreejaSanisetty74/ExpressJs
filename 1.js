var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('Welcome to Express JS!');
});
var server=app.listen(8000,function(){
    
});

