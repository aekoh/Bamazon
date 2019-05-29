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