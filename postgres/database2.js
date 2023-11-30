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
    database2 : function(req, res)  {
        const equipment_id = req.body.equipment_id; 
        console.log('vyshu');
        const customer_id =req.body.customer_id;
        console.log(req.body);
      
        if (!equipment_id) {
          return res.status(400).json({ error: 'equimentid ID is required' });
        }
      
        const query = 'SELECT * FROM equipment_uses_new where equipment_id = $1';
      
        client.query(query,[equipment_id],(err, result) => {
          if (err) {
            console.error('Error executing MySQL query: ' + err.stack);
            return res.status(500).json({ error: 'equip id not found'});
          }
          res.json(result.rows);
      });
          
         
        
      
      
      
      
      
}}


     