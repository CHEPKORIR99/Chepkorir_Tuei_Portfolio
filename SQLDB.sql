DROP DATABASE portfolio_db;
CREATE DATABASE portfolio_db;
USE portfolio_db;
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    link VARCHAR(255),
    image VARCHAR(255)
);
INSERT INTO projects (title, description, link, image) VALUES
('GIS Web App', 'A web app that visualizes spatial data interactively.', 'https://example.com/gis-web', 'gis_app.png'),
('Data Analysis Dashboard', 'A Power BI dashboard analyzing climate change trends.', 'https://example.com/dashboard', 'dashboard.png');

SELECT * FROM projects;