const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'vyshu',
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
client.query('SELECT * FROM equipment_uses_new', (err, result) => {
    if (err) {
      console.error('Error executing query', err);
      return;
    }
  
    console.log('Query result:', result.rows);
    
  });
  