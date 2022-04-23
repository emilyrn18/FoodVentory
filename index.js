const express = require('express'); //Import the express dependency
const app = express();       
const port = 8000;                  //port number where your server will be listening
const path = require('path');

// app.set('html', __dirname + 'html')
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('login.html', { root: path.join(__dirname, '/public/html') });                   
});

app.get('/createacc', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('createaccount.html', { root: path.join(__dirname, '/public/html') });                    
});

app.get('/inventory', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('inventory.html', { root: path.join(__dirname, '/public/html') });                    
});
app.get('/additem', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('additem.html', { root: path.join(__dirname, '/public/html') });                    
});
app.get('/addnew', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('addnewitem.html', { root: path.join(__dirname, '/public/html') });                    
});

app.get('/addold', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('addolditem.html', { root: path.join(__dirname, '/public/html') });                    
});

app.get('/nutrition', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('nutrition.html', { root: path.join(__dirname, '/public/components') });                    
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});