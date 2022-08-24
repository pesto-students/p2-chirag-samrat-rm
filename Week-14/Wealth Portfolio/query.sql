CREATE DATABASE wealthportfolio;
USE wealthportfolio ;

CREATE TABLE IF NOT EXISTS user_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(20) NOT NULL,
    lname VARCHAR(20) ,
    email VARCHAR(30) NOT NULL ,
    user_password VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS asset_type (
    id INT PRIMARY KEY AUTO_INCREMENT ,
    asset_name VARCHAR(20) NOT NULL 
);

CREATE TABLE IF NOT EXISTS amount_type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    label VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    tid INT PRIMARY KEY AUTO_INCREMENT,
    amount INT NOT NULL ,
    transaction_date DATE NOT NULL,
    transaction_time TIME NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user_info(id),
    asset_id INT,
    FOREIGN KEY (asset_id) REFERENCES asset_type(id),
    amount_type_id INT,
    FOREIGN KEY (amount_type_id) REFERENCES amount_type(id)
);
