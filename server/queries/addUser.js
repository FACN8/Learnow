const dbConnection = require("../database/db_connection");

// Assuming the verification if this user exists or not is done elsewhere for now
module.exports = (username,cb) => {
dbConnection.query('INSERT INTO users (user_name,total_groups) VALUES ($1,0)',[username],
(err,res) =>{
  if(err) return cb(err);
  cb(null,res);
});
};
