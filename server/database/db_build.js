const fs = require("fs");

const dbConnection = require("./db_connection");
const initQuery = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

// dbConnection.query(initQuery, (error, result) =>{
//     if(error) throw error;
//     console.log(("users table created with result : ", result));
// })

const runDbBuild = cb => dbConnection.query(initQuery, cb);

module.exports = runDbBuild;
