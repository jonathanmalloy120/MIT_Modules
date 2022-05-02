//initial stuff
const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

//data parser required for post method
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//swagger auto-documenter options chosen by professor, can read more about them
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            version: '1.0.0'
        }
    },
    apis: ['app.js']
};
//setting up swagger so it qill auto-document
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

//first route
app.get('/', (req,res)=>{
    res.send('Hello world!!!!!!!!!');
})

//another route qith YAML swagger documentation above it. Go to /api-docs defined above to see it!
/**
 * @swagger
 * /books:
 *  get:
 *     description: Get the book!
 *     responses:
 *      200:
 *        description: Success
 * 
 */
app.get('/books', (req,res) =>{
    res.send([
        {
            isbn: '12345',
            title: 'tomorrow Ill be perfect',
            author: 'Dave steib',
            publisher: 'MLB productions'
        }
    ]);
});

//my test (works)
app.get('/testing', (req,res) =>{
    res.send('you have found the hidden test message!')
});

//body parser will pull the body of the post apart, extract the "title" attribute and give it to us. Then we echo it back
/**
* @swagger
* /book:
*   post:
*     description: Get one book
*     parameters:
*     - name: title
*       description: Book title
*       in: body
*       required: true
*       type: string
*     responses:
*       200:
*         description: Success
*
*/
app.post('/book',(req,res)=>{
    const title = req.body.title;
    res.send({title})
});

app.listen(3000,() =>{
    console.log('listening on port 3000');
});