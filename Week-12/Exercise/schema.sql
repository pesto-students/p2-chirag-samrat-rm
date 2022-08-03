CREATE DATABASE WareHouse;
USE WareHouse;


CREATE TABLE cities(
    city CHAR(20),
    state CHAR(20),
    id INT PRIMARY KEY AUTO_INCREMENT,  
);

CREATE TABLE warehouse(
    wid INT PRIMARY KEY AUTO_INCREMENT,
    wname CHAR(30),
    location CHAR(20),
    city_id INT,
    FOREIGN KEY(city_id) REFERENCES cities(id)
);

CREATE TABLE stores(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    store_name CHAR(20),
    location_city CHAR(20),
    warehouse_id INT,
    FOREIGN KEY(warehouse_id) REFERENCES warehouse(id)
);

CREATE TABLE customer(
    cno INT PRIMARY KEY,
    cname CHAR(50) ,
    addr VARCHAR(50),
    order_id INT,
	FOREIGN KEY(order_id) REFERENCES orders
);

CREATE TABLE orders (
    ono INT PRIMARY KEY,
    odate DATE 
);

CREATE TABLE items(
	itemno INT PRIMARY KEY,
    description TEXT,
    weight DECIMAL(5,2),
    cost DECIMAL(5,2)
);

CREATE TABLE ordered_quantity(
    id INT PRIMARY KEY AUTO_INCREMENT,
    item_id INT,
    order_id INT,
    FOREIGN KEY (item_id) REFERENCES items(itemno),
    FOREIGN KEY (order_id) REFERENCES orders(ono)
);

CREATE TABLE quantity(
    id INT PRIMARY KEY AUTO_INCREMENT,
    item_id INT,
    store_id INT,
    FOREIGN KEY (item_id) REFERENCES items(itemno),
    FOREIGN KEY (store_id) REFERENCES stores(sid)
);
