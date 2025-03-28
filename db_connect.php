<?php
$servername = "localhost"; // Change to your database host if different
$username = "root"; // Change if your database has a different username
$password = "Gigavia@123"; // Change if your database has a password
$database = "portfolio_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>