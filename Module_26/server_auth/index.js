const express = require('express');
const app = express();
const admin = require('./admin');

app.use(express.static('public'));

//open route that does not require authentication
app.get('/open',(req,res) => res.send('Open Route!'));

//verify token at the root route
app.get('/auth',(req,res) =>{
    //read toen from request header
    const idToken = req.headers.authorization
    console.log('header:', idToken);

    //verify token
    admin.auth().verifyIdToken(idToken)
    .then(function(decodedToken) {
        console.log('decodedToken:',decodedToken);
        res.send('Authentication Successful!');
    }).catch(function(error) {
        console.log('error:',error);
        res.send('Authentication Failed');
    });
})

app.listen(3000,()=> {
    console.log("running on port 3000 yay");
})