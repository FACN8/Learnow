
const dbConnection = require("../database/db_connection");

module.exports = (userId,message,cb) => {
dbConnection.query(
  'INSERT INTO messages (user_id,message) VALUES ($1,$2) RETURNING id',
  [userId,message],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
