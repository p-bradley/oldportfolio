const config = require('../config');
const sql = require('mysql');

const connect = sql.createConnection({
    host: config.host,
    port: config.port,
    user: config.uname,
    password: config.pname,
    database: config.db
})

module.exports = connect;