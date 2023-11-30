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
    database5 : function(req, res)  {
        const columns = Object.keys(req.body[0]).join(',');
        console.log(columns);
    const multiplerows = req.body;
    //console.log(values)
    let i=0;
    while(i<multiplerows.length){
        const values = Object.values(multiplerows[i]);
      
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');

    const query = `INSERT INTO equipment_uses_new (${columns}) VALUES (${placeholders})`;


        client.query(query,values,(err, result)=>{
            if (err) {
                console.error('Error executing MySQL query: ' + err.stack);
                return res.status(500).json({ error: 'data not inserted'});
              }
              

        })

        
     i+=1; 
        
    }
res.json("success")
},
          
         
        
      
      
      
      
      
    }


     