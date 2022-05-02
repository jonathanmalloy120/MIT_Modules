const express = require('express');
const app     = express();
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);

//Init all user data to []
db.defaults({users:[]}).write();

//serve static files from the "public" directory in this project
//note, automatically looks for "index.html" as the default, changing the name of index causes an error
//------------------------------------
app.use(express.static('public'));

//data parser, used to parse post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//return all users
app.get('/data',function(req,res) {
    res.send(db.get('users').value());
});

//post route simple test
app.post('/test',function(req,res) {
    console.log(req.body.username,req.body.password);
    res.send(req.body.username + ' ' + req.body.password)
});

// Full add user route
app.post('/add', function(req, res){
    var user = {
        'name'          : req.body.name,
        'dob'           : req.body.dob,
        'email'         : req.body.email,
        'username'      : req.body.username,
        'password'      : req.body.password,
        'phone'         : req.body.phone,
        'streetaddress' : req.body.streetaddress,
        'citystatezip'  : req.body.citystatezip,
        'latitude'      : req.body.latitude,
        'longitude'     : req.body.longitude,
        'avatar'        : req.body.avatar
    }
    db.get('users').push(user).write();
    console.log(db.get('users').value());
    res.send(db.get('users').value());
});


//start server
//-------------------
app.listen(3000, function(){
    console.log('Up and running on port 3000')
});