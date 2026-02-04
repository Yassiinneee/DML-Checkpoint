-- Create the Customer table
CREATE TABLE Customer (
    Customer_id VARCHAR(10) PRIMARY KEY,
    Customer_Name VARCHAR(50),
    Customer_Tel VARCHAR(20)
);

-- Create the Product table
CREATE TABLE Product (
    Product_id VARCHAR(10) PRIMARY KEY,
    Product_Name VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- Create the Orders table
CREATE TABLE Orders (
    Order_id INT AUTO_INCREMENT PRIMARY KEY,
    Customer_id VARCHAR(10),
    Product_id VARCHAR(10),
    OrderDate DATE,
    Quantity INT,
    Total_amount DECIMAL(10, 2),
    FOREIGN KEY (Customer_id) REFERENCES Customer(Customer_id),
    FOREIGN KEY (Product_id) REFERENCES Product(Product_id)

);

-- Insert data into the Customer table
INSERT INTO Customer (Customer_id, Customer_Name, Customer_Tel)
VALUES
    ('C01', 'ALI', '71321009'),
    ('C02', 'ASMA', '77345823');

-- Insert data into the Product table
INSERT INTO Product (Product_id, Product_Name, Category, Price)
VALUES
    ('P01', 'Samsung Galaxy S20', 'SmartPhone', 3299),
    ('P02', 'ASUS Notebook', 'PC', 4599);

-- Insert data into the Orders table
INSERT INTO Orders (Customer_id, Product_id, OrderDate, Quantity, Total_amount)
VALUES
    ('C01', 'P02', NULL, 2, 9198),
    ('C02', 'P01', '2020-05-28', 1, 3299);

