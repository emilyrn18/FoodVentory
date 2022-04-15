const express = require('express'); //Import the express dependency
const app = express();       
const port = 8000;                  //port number where your server will be listening
const path = require('path');

// app.set('html', __dirname + 'html')

app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('login.html', { root: path.join(__dirname, '/html') });
                        
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});