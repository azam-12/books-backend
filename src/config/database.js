const mysql = require("mysql");

const connectDB = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Root_8191",
        database: "encyclopedia"
});

module.exports = connectDB;

