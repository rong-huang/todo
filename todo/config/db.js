const mariadb = require("mysql");

var db = mariadb.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "passw0rd",
    database: "todo",
});

module.exports = db;