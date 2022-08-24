// IMPORTS
var express = require("express");
var app = express();

const {
    deleteTransaction,
    createNewTransaction,
    getTransactionByUser,
    updateTransaction,
} = require("./services/transaction-service");

const {
    checkLoginSuccess,
    createUser,
    getData,
    updateUser,
    deleteUser,
} = require("./services/user-service");
const { getData } = require("./services/getData");

// VARIABLES
let callback = (result) => {
    res.send(result);
};
let port = 3000;

// MIDDLEWARE
app.get("/login", (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) {
        return res.send({ isLoginSuccess: false });
    }

    checkLoginSuccess(req.query, callback);
});

app.post("/signup", (req, res) => {
    const { fname, lname, email, password } = req.query;
    if (!fname || !email || !password) {
        return res.send({ isSignup: false, message: "Enter valid details" });
    } else {
        createUser(req.query, callback);
    }
});

app.patch("/updateUser", (req, res) => {
    let { fname, lname, email, password } = req.body;
    if (!fname || !lname || !email || !password) {
        return res.send({
            updateUser: "failed",
            message: "enter valid properties",
        });
    } else {
        updateUser(req.body, callback);
    }
});

app.delete("/deleteUser", (req, res) => {
    const { fname, lname, email, password, userId } = req.body;
    if (!fname || !lname || !email || !password || !userId) {
        return res.send({
            deleteUser: "failed",
            message: "enter valid properties",
        });
    }
    deleteUser(req.body, callback);
});

app.get("/getTransactionsByUser", (req, res) => {
    let { userID } = req.query;
    if (!userID) {
        return res.send({ getTransaction: false, message: "invalid user id" });
    } else {
        getTransactionByUser(req.query, callback);
    }
});

app.post("/createNewTransaction", (req, res) => {
    const { userId, amount, date, assetName, amountTypeId } = req.query;
    if (!userId || !amount || !date || !assetName || !amountTypeId) {
        return res.send({
            isCreateNewTransaction: false,
            message: "Enter valid details",
        });
    } else {
        createNewTransaction(req.query, callback);
    }
});

app.patch("/updateTransaction", (req, res) => {
    let { tid } = req.query;
    if (!tid) {
        return res.send({
            getTransaction: false,
            message: "invalid transaction id",
        });
    } else {
        updateTransaction(req.query, callback);
    }
});

app.delete("/deleteTransaction", (req, res) => {
    let { tid } = req.body;
    if (!tid) {
        return res.send({
            deleteTransaction: "failed",
            message: "enter valid tid",
        });
    } else {
        deleteTransaction(req.body, callback);
    }
});

app.get("/getData", (req, res) => {
    let { userID } = req.query;
    if (!userID) {
        return res.send({ getTransaction: false, message: "invalid user id" });
    } else {
        getData(req.query, callback);
    }
});

// LISTENER
app.listen(port, () => {
    console.log("Server running on port 3000...");
});
