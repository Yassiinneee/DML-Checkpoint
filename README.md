# 📊 Database Manipulation Language (DML) Checkpoint

> A professional implementation of **Database Manipulation Language (DML)** concepts using **MySQL** and **Node.js**. This project demonstrates the creation of a relational database, table relationships, and data insertion through both SQL scripts and programmatic database management.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Objectives](#-objectives)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [Technologies Used](#-technologies-used)
- [Features](#-features)
- [Database Design](#-database-design)
- [Installation](#-installation)
- [Usage](#-usage)
- [SQL Operations](#-sql-operations)
- [Project Workflow](#-project-workflow)
- [Learning Outcomes](#-learning-outcomes)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

# 📖 Overview

This project was developed as part of a **Database Manipulation Language (DML)** checkpoint.

It demonstrates how to build a relational database from scratch, establish relationships using foreign keys, and populate tables with sample data. The project also automates the entire database creation process using **Node.js** and the **mysql2** library.

The implementation follows fundamental database design principles while providing a practical example of integrating SQL with JavaScript.

---

# 🎯 Objectives

The main objectives of this checkpoint are:

- Design a relational database.
- Create multiple related tables.
- Apply primary and foreign key constraints.
- Insert records using SQL DML statements.
- Automate database creation using Node.js.
- Understand relational database integrity.
- Practice MySQL database management.

---

# 📁 Project Structure

```text
DML-Checkpoint-main/
│
├── DataML.sql              # SQL script for creating tables and inserting records
├── DML.js                  # Node.js automation script
├── dml.txt                 # DML insertion statements
├── DML conception.png      # Database schema / ER diagram
└── README.md
```

---

# 🗄 Database Schema

The project contains three related tables:

## Customer

| Column | Type |
|---------|------|
| Customer_id | VARCHAR(10) |
| Customer_Name | VARCHAR(50) |
| Customer_Tel | VARCHAR(20) |

---

## Product

| Column | Type |
|---------|------|
| Product_id | VARCHAR(10) |
| Product_Name | VARCHAR(100) |
| Category | VARCHAR(50) |
| Price | DECIMAL(10,2) |

---

## Orders

| Column | Type |
|---------|------|
| Order_id | INT (Auto Increment) |
| Customer_id | Foreign Key |
| Product_id | Foreign Key |
| OrderDate | DATE |
| Quantity | INT |
| Total_amount | DECIMAL(10,2) |

---

# 💻 Technologies Used

- **MySQL**
- **SQL (DDL & DML)**
- **Node.js**
- **mysql2**
- **JavaScript (ES6 Async/Await)**

---

# ✨ Features

- ✔ Automatic database creation
- ✔ Automatic table creation
- ✔ Primary key constraints
- ✔ Foreign key relationships
- ✔ Sample data insertion
- ✔ SQL script implementation
- ✔ Node.js database automation
- ✔ Clean relational database architecture

---

# 🏗 Database Design

The database models a simple sales management system.

```
Customer
   │
   │ 1
   │
   │
   ▼
 Orders
   ▲
   │
   │ Many
   │
Product
```

Relationships:

- One customer can place multiple orders.
- One product can appear in multiple orders.
- Orders act as the junction between customers and products.

---

# ⚙ Installation

## 1 Clone the repository

```bash
git clone https://github.com/yourusername/DML-Checkpoint.git
```

---

## 2 Navigate into the project

```bash
cd DML-Checkpoint
```

---

## 3 Install dependencies

```bash
npm install
```

or install only mysql2

```bash
npm install mysql2
```

---

## 4 Configure MySQL credentials

Inside **DML.js**

```javascript
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "yassineDML",
};
```

Update these values according to your local MySQL configuration.

---

# ▶ Usage

Run the automation script:

```bash
node DML.js
```

The script will automatically:

- Create the database
- Create the tables
- Create relationships
- Insert sample records

---

# 📝 SQL Operations

The project demonstrates the following SQL operations.

### CREATE DATABASE

```sql
CREATE DATABASE IF NOT EXISTS yassineDML;
```

### CREATE TABLE

- Customer
- Product
- Orders

### INSERT INTO

Example:

```sql
INSERT INTO Customer
VALUES ('C01','ALI','71321009');
```

Foreign key relationships ensure referential integrity throughout the database.

---

# 🔄 Project Workflow

```text
Start
   │
   ▼
Connect to MySQL
   │
   ▼
Create Database
   │
   ▼
Create Tables
   │
   ▼
Apply Constraints
   │
   ▼
Insert Sample Data
   │
   ▼
Database Ready
```

---

# 🎓 Learning Outcomes

By completing this project, the following concepts were practiced:

- Relational database modeling
- SQL DDL commands
- SQL DML commands
- Primary keys
- Foreign keys
- Referential integrity
- MySQL database management
- Database automation with Node.js
- Asynchronous database operations using async/await

---

# 🚀 Future Improvements

Potential enhancements include:

- CRUD operations (Create, Read, Update, Delete)
- Prepared statements
- Transactions
- Error logging
- Input validation
- Express.js REST API
- Authentication
- Inventory management
- Customer management dashboard
- Docker support
- Unit testing

---

# 👨‍💻 Author

**Yassine Kaltoum**

Database & Full Stack Development Student

Passionate about:

- Database Systems
- Backend Development
- Software Engineering
- Node.js
- SQL
- Web Technologies

---

# 📄 License

This project was developed for educational purposes as part of a Database Manipulation Language (DML) checkpoint.

Feel free to use, modify, and extend it for learning and academic purposes.

---

## ⭐ Project Highlights

- Relational Database Design
- MySQL Integration
- Node.js Automation
- Foreign Key Relationships
- Professional SQL Structure
- Clean and Maintainable Code
- Beginner-Friendly Architecture
- Practical DML Implementation
