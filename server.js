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
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.send('Form submitted successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});