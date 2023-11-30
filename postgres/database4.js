const express = require("express");
var app = express();

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'vyshu',
    database: 'postgres',
    port:5432,
  });
  


client.connect(function(err) {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected!');
});
module.exports = {
    database4 : function(req, res)  {
        const columns = Object.keys(req.body).join(',');
        console.log(columns);
    const values = Object.values(req.body);
    console.log(values)
      
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

    const query = `INSERT INTO equipment_uses_new (${columns}) VALUES (${placeholders})`;


        client.query(query,values,(err, result)=>{
            if (err) {
                console.error('Error executing MySQL query: ' + err.stack);
                return res.status(500).json({ error: 'data not inserted'});
              }
              res.json(result.rows);

        })

        
      
        
          
      },
          
         
        
      
      
      
      
      
    }


     