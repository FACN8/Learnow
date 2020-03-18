const dbConnection = require("../database/db_connection");

module.exports = (groupId,cb) => {
  dbConnection.query(
    `
    SELECT user_name, message, updated_at 
    FROM messages INNER JOIN group_messages ON 
    messages.id=group_messages.message_id 
    INNER JOIN users ON 
    users.id = user_id
    WHERE group_id = $1
    `,[groupId],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  });
  };
  