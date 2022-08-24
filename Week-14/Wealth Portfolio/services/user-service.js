let { createConnection } = require("../config");

let checkLoginSuccess = ({ email, password }, callback) => {
    let connection = createConnection();
    let query = `SELECT id , COUNT(*) AS count FROM user_info 
                WHERE email = ${email} AND password = ${password}`;
    connection.connect(query, (err, result) => {
        if (result[0] && result[0].count == 1) {
            callback({ isLogin: true, userID: result[0].id });
        } else {
            callback({ isLogin: false, message: "login failed" });
        }
    });
};

let createUser = (userInfo, callback) => {
    const { fname, lname, email, password } = userInfo;
    const connection = createConnection();
    const query = `INSERT INTO user_info (fname,lname,email,password)
                        VALUES ("${fname}" , "${lname}" , "${email}" , "${password}");`;
    connection.query(query, (err, result) => {
        if (err)
            callback({ createUser: false, message: "user is not created" });
        else result;
        callback({ createUser: true, message: "user created successfully" });
    });
};

let updateUser = (userInfo, callback) => {
    const { fname, lname, email, password } = userInfo;
    let properties = "";
    if (fname) {
        properties += "fname=" + fname + ",";
    }
    if (lname) {
        properties += "lname=" + lname + ",";
    }
    if (email) {
        properties += " email=" + email + ",";
    }
    if (password) {
        properties += "password=" + password + ",";
    }
    let query = `UPDATE user_info WHERE ${properties};`;
    let connection = createConnection();
    connection.query(query, (err, result) => {
        if (err) callback(err);
        else callback({ update: "successful" });
    });
};

let deleteUser = (userInfo, callback) => {
    const { fname, lname, email, password, userId } = userInfo;
    let properties = "";
    if (fname) {
        properties += "fname=" + fname + ",";
    } else if (lname) {
        properties += "lname=" + lname + ",";
    } else if (email) {
        properties += " email=" + email + ",";
    } else if (password) {
        properties += "password=" + password + ",";
    } else if (userId) {
        properties += "id=" + userId + ",";
    }
    let query = `DELETE user_info WHERE ${properties};`;
    let connection = createConnection();
    connection.query(query, (err, result) => {
        if (err) callback(err);
        else callback({ update: "successful" });
    });
};

let getData = ({ userId }, callback) => {
    let connection = createConnection();
    let query = `SELECT SUM(amount) AS "total" , lable FROM transactions
                INNER JOIN asset_type
                GROUP BY amount_id HAVING user_id = ${userId};`;
    connection.query(query, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(JSON.stringify(result));
        }
    });
};

module.exports = {
    checkLoginSuccess,
    createUser,
    getData,
    updateUser,
    deleteUser,
};
