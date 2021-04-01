// const path = require("path");
const express = require('express')
const app = express();

// const staticpath = path.join(__dirname , "../public");

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  
  app.get('/about', function (req, res) {
      res.send('Hello World! from about page')
    })
    
  
  app.listen(8000)