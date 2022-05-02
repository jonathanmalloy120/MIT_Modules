const express  = require('express');
const app = express();

app.use(express.static('public'));

//create account
function create(name,email,password){
    return({
        name,
        email,
        password
    });
}

//get route
app.get('/account/create/:name/:email/:password',function(req,res) {
    res.send(create(
        req.params.name,
        req.params.email,
        req.params.password
    ));
})

//add listener
app.listen(3000, function(){
    console.log('listening on 3000 leggo');
})