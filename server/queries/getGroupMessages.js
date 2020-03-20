const dbConnection = require('../database/db_connection');

module.exports = (groupId, cb) => {
  dbConnection.query(
    `
    SELECT user_name,user_id, message, updated_at 
    FROM messages
    WHERE group_id = $1
    `,
    [groupId],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    },
  );
};
