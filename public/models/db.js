/**
 * This file establishes a connection to the database. 
 * It can be used (required) in any other file where a database connection is required.
 * Usage: 
 * const db = require('./db'); //require the database [in models directory]
 * Then to use this for sql, do: db.query('SQL statements .....') 
 */

 const mysql = require('mysql')
 var CryptoJS = require('crypto-js');
 var randomStr = CryptoJS.AES.decrypt(process.env.DATABASE_PASSWORD, process.env.SECRET_KEY);

 var con = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    user     : process.env.DATABASE_USER,
    password: randomStr.toString(CryptoJS.enc.Utf8),
    database : process.env.DATABASE
  });


/* OPTIONAL: Use this to check the connection of your database and node/JS */

//   con.connect(error => {
//     if(error){ 
//         throw error
//     }
//     console.log('MySql Connected!')
// })

  

  module.exports = con;