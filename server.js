const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', //  MySQL username
    password: 'Gigavia@123', //  MySQL password
    database: 'portfolio_db' // 
});
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Handle form submission
db.query(sql, [name, user_id, email, message], (err, result) => {
    if (err) {
        console.error('🛑 SQL Error:', err.sqlMessage); // Detailed error message
        res.status(500).send('Error saving data: ' + err.sqlMessage);
    } else {
        console.log('✅ Form data saved:', result);
        res.send('Form submitted successfully');
    }
});