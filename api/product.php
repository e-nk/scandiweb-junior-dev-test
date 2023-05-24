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

// Function to get a single product by SKU
function getProductBySku($sku)
{
    global $db;
    $query = "SELECT * FROM product WHERE sku = :sku";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':sku', $sku);
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
    $stmt->execute($product);
    return $db->lastInsertId();
}

// Function to delete a product by SKU
function deleteProduct($sku)
{
    global $db;
    $query = "DELETE FROM product WHERE sku = :sku";
    $stmt = $db->prepare($query);
    $stmt->bindValue(':sku', $sku);
    return $stmt->execute();
}
?>
