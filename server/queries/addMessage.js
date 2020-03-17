
const dbConnection = require("./db_connection");

module.exports = (userId,message,cb) => {
dbConnection.query(
  'INSERT INTO messages VALUES ($1,$2)',[userId,message],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
