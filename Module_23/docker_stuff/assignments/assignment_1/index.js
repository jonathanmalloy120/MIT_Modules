var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log(new Date().toLocaleString());
    res.send(new Date().toLocaleString())
});

var port = 3001;

app.listen(port,function(){
    console.log("listening on port ",port)
});