DROP DATABASE portfolio_db;
CREATE DATABASE portfolio_db;
USE portfolio_db;
USE portfolio_db;

CREATE TABLE form_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    id VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);