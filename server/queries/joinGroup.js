const dbConnection = require("../database/db_connection");

module.exports = (groupId,userId,cb) => {
dbConnection.query(
  'INSERT INTO group_users (group_id,user_id) VALUES ($1,$2)',[groupId,userId],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
