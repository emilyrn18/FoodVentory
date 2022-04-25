const express = require('express'); //Import the express dependency
const app = express();       
const port = 8000;                  //port number where your server will be listening
const path = require('path');
const bodyParser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config({path: './.env'})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.set('html', __dirname + 'html')
app.use(express.static(__dirname + '/public'));

const db = require('./public/models/db')

// app.get('/', (req, res) => {        //get requests to the root ("/") will route here
//     res.sendFile('login.html', { root: path.join(__dirname, '/public/html') });                   
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

const loginRouter = require('./public/routes/login')
const createAccRouter = require('./public/routes/createaccount')
const addItemRouter = require('./public/routes/additem')
const newItemRouter = require('./public/routes/addnewitem')
const oldItemRouter = require('./public/routes/addolditem')
const inventoryRouter = require('./public/routes/inventory')
const foodbytypeRouter = require('./public/routes/foodbytype')
const nutritionRouter = require('./public/routes/nutrition')
const userprofileRouter = require('./public/routes/userprofile')


app.use('/', loginRouter)
app.use('/createacc', createAccRouter)
app.use('/additem', addItemRouter)
app.use('/addnewitem', newItemRouter)
app.use('/addolditem', oldItemRouter)
app.use('/inventory', inventoryRouter) 
app.use('/foodbytype', foodbytypeRouter)
app.use('/nutrition', nutritionRouter)
app.use('/userprofile', userprofileRouter)


app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});