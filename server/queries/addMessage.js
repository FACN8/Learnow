
const dbConnection = require("../database/db_connection");

module.exports = (userId,message,cb) => {
dbConnection.query(
  'INSERT INTO messages VALUES ($1,$2)',[userId,message],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
