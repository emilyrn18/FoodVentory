
  require('dotenv').config()
  const db = require('./db'); //require the database
  const bcrypt = require('bcrypt');
  
  exports.login = async(req, res) => {
    try {
      const {username, pass} = req.body;
      //console.log(username)
        db.query('SELECT * FROM user WHERE Username =?', [username], async(error, results) => {
        //console.log(results)
          if (!results || !(await bcrypt.compare(pass, results[0].Password))) {
            res.status(400).send('Try again! Email or password incorrect')
            /** 
            render('login', {   //todo: make render work
              message:'Try again! Email or password incorrect'
            })*/
        }else{
          //Not generating a cookie or authenticating the user for the purpose of simplicity and avoiding to secure paths 
          res.status(200).redirect('/inventory')
          
        }
        })
      } catch (error) {
      console.log(error)
    }
  }