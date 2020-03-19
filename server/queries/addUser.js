const dbConnection = require("../database/db_connection");

// Assuming the verification if this user exists or not is done elsewhere for now
module.exports = (id,username,cb,totalGroups=0) => {
dbConnection.query('INSERT INTO users (id,user_name,total_groups) VALUES ($1,$2,$3)',[id,username,totalGroups],
(err,res) =>{
  if(err) return cb(err);
  cb(null,res);
});
};
