const dbConnection = require("../database/db_connection");
const query = 
`
INSERT INTO group_users (group_id,user_id) VALUES ($1,$2);
UPDATE groups
SET participants = participants + 1
WHERE
   id = $1;
UPDATE users
SET total_groups = total_groups + 1
WHERE
   id = $2;

`;
module.exports = (groupId,userId,cb) => {
dbConnection.query(query,[groupId,userId],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
}
