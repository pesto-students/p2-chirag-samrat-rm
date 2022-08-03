# item that has min weight
SELECT MIN(weight) FROM items;

# Diff warehouses in Pune
SELECT locations FROM warehouse 
WHERE city_id = (SELECT * FROM cities WHERE city = "Pune") ;

# details of items ordered by a customer “Mr. Patil”
SELECT cname,ono,odate FROM orders 
JOIN customer
	ON orders.customer_id = customer.cno
GROUP BY customer.cname
HAVING customer.cname = "Mr. Patil";

# Warehouse which has maximum stores.
SELECT COUNT(stores.sid) AS storesInWarehouse FROM warehouse 
JOIN stores 
	ON stores.warehouse_id = warehouse.id 
GROUP BY stores.warehouse_id
ORDER BY storesInWarehouse DESC
LIMIT 1;

# item ordered min no. of times 
SELECT itemno , COUNT(*) AS quantity FROM items
JOIN ordered_quantity 
	ON ordered_quantity.item_id = items.itemno
JOIN orders 
	ON orders.ono = ordered_quantity.order_id 
GROUP BY ordered_quantity.item_id 
ORDER BY quantity ASC
LIMIT 1;

# detailed order of each customer 
SELECT cname, description , cost , odate FROM customer
RIGHT JOIN orders 
	ON orders.ono = customer.order_id 
GROUP BY customer.cno;


