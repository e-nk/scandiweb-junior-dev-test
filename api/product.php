<?php
require_once 'db_config.php';

// Function to get all products
function getAllProducts()
{
    global $db;
    $query = "SELECT * FROM product";
    $stmt = $db->query($query);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    return $products;
}

// Function to get a single product by ID
function getProductById($id)
{
    global $db;
    $query = "SELECT * FROM product WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    $product = $stmt->fetch(PDO::FETCH_ASSOC);
    return $product;
}


// Function to create a new product
function createProduct($product)
{
    global $db;
    $query = "INSERT INTO product (sku, name, price, productType, size, weight, height, width, length) 
              VALUES (:sku, :name, :price, :productType, :size, :weight, :height, :width, :length)";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':sku', $product['sku']);
    $stmt->bindValue(':name', $product['name']);
    $stmt->bindValue(':price', $product['price']);
    $stmt->bindValue(':productType', $product['productType']);
    $stmt->bindValue(':size', $product['size']);
    $stmt->bindValue(':weight', $product['weight']);
    $stmt->bindValue(':height', $product['height']);
    $stmt->bindValue(':width', $product['width']);
    $stmt->bindValue(':length', $product['length']);
    $stmt->execute();
    return $db->lastInsertId();
}

// Function to delete a product by ID
function deleteProduct($id)
{
    global $db;
    $query = "DELETE FROM product WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    return $stmt->execute();
}
?>
