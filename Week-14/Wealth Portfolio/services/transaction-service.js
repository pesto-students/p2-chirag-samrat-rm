let { createConnection } = require("../config");

let getTransactionByUser = ({ userID, year, month }, callback) => {
    let query = `SELECT * FROM transactions WHERE user_id = ${userID}`;

    if (month) {
        month += 0; //to convert to number if string
        query += ` AND MONTH(date) = ${month}`;
    } else if (year) {
        year += 0;
        queey += ` AND YEAR(date) = ${year}`;
    }

    let connection = createConnection();

    connection.query(query, (err, result) => {
        if (err) {
            callback(err);
        } else {
            callback(JSON.stringify(result));
        }
    });
};

let createNewTransaction = (
    { userId, amount, date, assetName, amountTypeId },
    callback
) => {
    let assetIdQuery = `SELECT id FROM asset_type WHERE asset_name = ${assetName}`;
    let connection = createConnection();
    connection.query(assetIdQuery, (err, result) => {
        if (err) {
            callback(err);
        } else {
            let asset_id = result[0].id;
            let query = `INSERT INTO Trasactions 
                    (user_id, amount, transaction_date,transaction_time, asset_type_id, amount_id) 
                VALUES 
                (${userId}, '${amount}', '${date}', CURTIME() ,'${asset_id}', ${amountTypeId});`;
            connection.query(query, (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    callback({
                        TransactionStatus: true,
                        message: "new transaction added",
                    });
                    result;
                }
            });
        }
    });
};

let updateTransaction = (
    { userId, amount, date, assetName, amountType, tid },
    callback
) => {
    if (assetName) {
        var assetId = `SELECT id FROM asset_type WHERE lable = ${assetName};`[0]
            .id;
    } else if (amountType) {
        var amountId =
            `SELECT id FROM amount_type WHERE asset_name = ${amountType};`[0]
                .id;
    }
    let connection = createConnection();
    let properties = "";
    if (userId) {
        properties += "user_id=" + userId + ",";
    } else if (amount) {
        properties += "amount=" + amount + ",";
    } else if (date) {
        properties += "date=" + date + ",";
    } else if (assetId) {
        properties += "asset_id=" + assetId + ",";
    } else if (amountId) {
        properties += "amount_id" + amountId + ",";
    }
    let query = `UPDATE transactions SET ${properties} WHERE tid = ${tid}`;
    connection.query(query, (err, result) => {
        if (err) callback(err);
        else callback({ update: "successful" });
    });
};

let deleteTransaction = ({ tid }, callback) => {
    let query = `DELETE transactions WHERE tid = ${tid}`;
    let connection = createConnection();
    connection.query(query, (err, result) => {
        if (err) callback(err);
        else callback({ delete: "successful" });
    });
};

module.exports = {
    deleteTransaction,
    createNewTransaction,
    getTransactionByUser,
    updateTransaction,
};
