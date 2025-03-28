<?php
include 'db_connect.php'; // Include the database connection

$sql = "SELECT title, description, link, image FROM projects";
$result = $conn->query($sql);

$projects = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $projects[] = $row; // Store each row in an array
    }
}

// Convert data to JSON format
echo json_encode($projects);

$conn->close();
?>