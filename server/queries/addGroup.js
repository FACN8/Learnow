const dbConnection = require("./db_connection");

// Assuming the verification if this user exists or not is done elsewhere for now
module.exports = (name,description,course,participants,cb) => {
dbConnection.query(
  'insert into groups  (name,description,course,participants) values ($1,$2,$3,0)',[name,description,course,participants],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
