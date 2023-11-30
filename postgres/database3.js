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
    database3 : function(req, res)  {
        const {out_dt,in_dt}= req.body; 
        console.log('vyshu');
      
        const query = 'SELECT public.chassislist121($1,$2)';

        client.query(query,[out_dt,in_dt],(err, result)=>{
            if (err) {
                console.error('Error executing MySQL query: ' + err.stack);
                return res.status(500).json({ error: 'equip id not found'});
              }
              res.json(result.rows);

        })

        
      
        
          
      },
          
         
        
      
      
      
      
      
    }


     