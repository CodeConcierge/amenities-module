const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const port = 3003;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/api/amenities', (req, res) => {
  db.getAmenenities((err, amenData) => {
    if(err) {
      throw err;
      return;
    } else {
      //res.header("Access-Control-Allow-Origin", "*");
      stringedAmenData = JSON.stringify(amenData)
      res.end(stringedAmenData)
    }
  })
})

app.listen(port, () => {
  console.log(`I'm serving from http://localhost:${port}`);
});