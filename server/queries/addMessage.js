
const dbConnection = require("./db_connection");

// Assuming the verification if this user exists or not is done elsewhere for now
module.exports = (userId,message) => {
dbConnection.query(
  'INSERT INTO messages VALUES ($1,$2)',[userId,message],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
