const dbConnection = require("../database/db_connection");

// Assuming the verification if this user exists or not is done elsewhere for now
module.exports = (name,description,course,cb) => {
dbConnection.query(
  'insert into groups  (name,description,course,participants) values ($1,$2,$3,0)',[name,description,course],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
