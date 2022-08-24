let mysql = require("mysql");

let connection;

let config = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "wealthportfolio",
};

// this function will create a connection if there is no connection
let createConnection = () => {
    if (!connection) {
        connection = mysql.createConnection(config);
        connection.connect((err) => {
            if (err) {
                return console.error("error: " + err.message);
            }
        });
    }
};

module.exports = { createConnection };
