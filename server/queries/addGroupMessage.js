
const dbConnection = require("../database/db_connection");
const addMessage = require("./addMessage");
module.exports = (userId,message,groupId,cb) => {

addMessage(userId,message,(err,res)=>{
  if(err) return 'Cannot add message!';
  console.log(res);
  dbConnection.query(
  'INSERT INTO group_messages VALUES ($1,$2)',[groupId,res.rows.message_id],
  (err,res) =>{
    if(err) return cb(err);
    cb(null,res);
  })
})
};
