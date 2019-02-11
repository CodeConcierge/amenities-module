const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAmenenities = function(serverCallback) {
  let query = 'SELECT * FROM amenities ORDER BY appeal DESC';
  let sqlCb = (err, dbData) => {
    if (err) {
      throw err;
      return
    } else {
      serverCallback(null, dbData);
    }
  }
  connection.query(query, sqlCb);
}

module.exports = {
    getAmenenities
  };