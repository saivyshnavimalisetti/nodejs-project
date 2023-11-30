const express=require("express");
const d = require("./postgres/database5");

var app = express();
console.log('1');
app.use(express.json());
console.log('2');
app.use(express.urlencoded({extended:false}));
console.log('3');
app.use('/database5',d.database5);
console.log('4');

const start = (port) => {
    try {
        app.listen(port,() => {
          console.log('api running at http://localhost:${port}');
        });
      } catch(err) {
        console.error(err);
        process.exit();
      }
    };
    
   start(5000)
   