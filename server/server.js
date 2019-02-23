const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const port = 3003;


app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "http://localhost:3000", "http://ec2-3-89-187-136.compute-1.amazonaws.com/");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/api/amenities/:homeId', (req, res) => {
// app.get('/api/amenities/', (req, res) => {
  //console.log('server listening at /api/amenities')
  // let homeId = req.param('homeId')
  //req.params.homeId
  
  db.getAmenenities(req.params.homeId, (err, amenData) => {
    if(err) {
      throw err;
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