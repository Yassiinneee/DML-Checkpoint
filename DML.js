const mysql = require('mysql2/promise');

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'yassineDML', // Name of the database you want to create
};

// Function to create the database and tables
async function createDatabaseAndTables() {
  let connection;

  try {
    // Connect to MySQL without specifying a database
    connection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
    });

    // Create the database
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
    console.log(`Database "${dbConfig.database}" created or already exists.`);

    // Switch to the new database
    await connection.query(`USE ${dbConfig.database}`);

    // Create the Customer table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Customer (
        Customer_id VARCHAR(10) PRIMARY KEY,
        Customer_Name VARCHAR(50) NOT NULL,
        Customer_Tel VARCHAR(20) NOT NULL
      )
    `);
    console.log('Customer table created or already exists.');

    // Create the Product table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Product (
        Product_id VARCHAR(10) PRIMARY KEY,
        Product_Name VARCHAR(100) NOT NULL,
        Category VARCHAR(50) NOT NULL,
        Price DECIMAL(10, 2) NOT NULL
      )
    `);
    console.log('Product table created or already exists.');

    // Create the Orders table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS Orders (
        Order_id INT AUTO_INCREMENT PRIMARY KEY,
        Customer_id VARCHAR(10) NOT NULL,
        Product_id VARCHAR(10) NOT NULL,
        OrderDate DATE,
        Quantity INT NOT NULL,
        Total_amount DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (Customer_id) REFERENCES Customer(Customer_id),
        FOREIGN KEY (Product_id) REFERENCES Product(Product_id)
      )
    `);
    console.log('Orders table created or already exists.');

    // Insert data into the Customer table
    await connection.query(`
      INSERT INTO Customer (Customer_id, Customer_Name, Customer_Tel)
      VALUES
        ('C01', 'ALI', '71321009'),
        ('C02', 'ASMA', '77345823')
    `);
    console.log('Data inserted into Customer table.');

    // Insert data into the Product table
    await connection.query(`
      INSERT INTO Product (Product_id, Product_Name, Category, Price)
      VALUES
        ('P01', 'Samsung Galaxy S20', 'SmartPhone', 3299),
        ('P02', 'ASUS Notebook', 'PC', 4599)
    `);
    console.log('Data inserted into Product table.');

    // Insert data into the Orders table
    await connection.query(`
      INSERT INTO Orders (Customer_id, Product_id, OrderDate, Quantity, Total_amount)
      VALUES
        ('C01', 'P02', NULL, 2, 9198),
        ('C02', 'P01', '2020-05-28', 1, 3299)
    `);
    console.log('Data inserted into Orders table.');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    if (connection) {
      await connection.end();
    }
  }
}

// Execute the function
createDatabaseAndTables();
