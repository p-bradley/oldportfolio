const config = require('../config');
const sql = require('mysql');

const pool = sql.createPool({
    connectionLimit : 10,
    host: config.host,
    port: config.port,
    user: config.uname,
    password: config.pname,
    database: config.db
})

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

module.exports = pool;