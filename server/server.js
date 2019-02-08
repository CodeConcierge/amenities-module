const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/api/amenities', (req, res) => {
  db.getAmenenities((err, amenData) => {
    if(err) {
      throw err;
      return;
    } else {
      stringedAmenData = JSON.stringify(amenData)
      res.end(stringedAmenData)
    }
  })
})

app.listen(port, () => {
  console.log(`I'm serving from http://localhost:${port}`);
});