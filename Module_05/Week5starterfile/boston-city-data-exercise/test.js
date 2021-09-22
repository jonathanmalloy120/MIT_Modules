//coppied from this video: https://www.youtube.com/watch?v=VShtPwEkDD0&t=226s
//control + C to close server
const http = require('http');
const fs = require('fs')
const port = 3000;

const server = http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'}) //200 is good status, content type tells what kidn fo data it is
    fs.readFile('index1.html',function(error,data) { //if error print error, otherwise write data from file specified
        if(error) {
            res.writeHead(404);
            res.write('Error: File Not Found') //write error
        } else {
            res.write(data) //write data
        }
        res.end()
    })
});

server.listen(port,function(error) {
    if (error) {
        console.log('Something went wrong',error);
    }else {
        console.log('Server is listening on port ' + port)
    }
})