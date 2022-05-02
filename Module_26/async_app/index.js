const express  = require('express');
const app = express();

app.use(express.static('public'));

//create account
function create(name,email,password){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            try{
                resolve({
                    name,
                    email,
                    password
                });
            }
            catch(err){
                reject(err);
            }
        }, 2000);
    })
}

//get route
app.get('/account/create/:name/:email/:password', function(req,res) {
    create(req.params.name, req.params.email,req.params.password)
    .then((user) => {
        console.log(user);
        res.send(user);

    }).catch((err) => console.log(err));
})

//add listener
app.listen(3000, function(){
    console.log('listening on 3000 leggo');
})