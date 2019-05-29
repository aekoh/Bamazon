DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INTEGER UNIQUE,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR (45) NULL,
    price INTEGER,
    stock_quantity INTEGER
); 


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3656", "Foundation", "Makeup", "50", "30");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3657", "Concealer", "Makeup", "20", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3658", "Lotion", "Cosmetics", "30", "15");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3659", "Soap", "Cosmetics", "20", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3660", "Shampoo", "Hair", "20", "10");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3661", "Straightener", "Hair", "20", "10");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3662", "Bikini", "Swimwear", "50", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3663", "Tankini", "Swimwear", "50", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3664", "Tazor", "Electronics", "50", "20");

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("3665", "Charger", "Electronics", "30", "20");

