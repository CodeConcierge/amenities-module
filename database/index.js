const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAmenenities = function(homeId, serverCallback) {
  //let randHomeId = Math.floor(Math.random()*100 + 100);
  let home = homeId
  let query = 'SELECT * FROM amenities,amen_join_home WHERE amen_join_home.home_id=' + home + '&&amen_join_home.amen_id=amenities.id order by amenities.appeal desc';
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