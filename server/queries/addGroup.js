const dbConnection = require("../database/db_connection");

// Assuming the verification if this user exists or not is done elsewhere for now
module.exports = (name,description,course,creatorId,cb) => {
dbConnection.query(
  'insert into groups  (name,description,course,participants,creator_id) values ($1,$2,$3,0,$4)',[name,description,course,creatorId],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
