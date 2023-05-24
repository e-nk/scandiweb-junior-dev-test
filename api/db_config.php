<?php
$host = 'localhost';  // Replace with your database host
$dbName = 'product_db';  // Replace with your database name
$username = 'root';  // Replace with your database username
$password = '';  // Replace with your database password

try {
    $db = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8mb4", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
}
?>
