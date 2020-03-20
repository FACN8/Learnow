const dbConnection = require('../database/db_connection');

module.exports = (courseId, cb) => {
  dbConnection.query(
    `SELECT * FROM groups
      WHERE course=$1`,
    [courseId],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    },
  );
};
