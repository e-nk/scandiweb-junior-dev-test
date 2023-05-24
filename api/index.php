<?php
require_once 'product.php';

// Handle GET request to retrieve all products
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $products = getAllProducts();
    header('Content-Type: application/json');
    echo json_encode($products);
}

// Handle GET request to retrieve a single product by SKU
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['sku'])) {
    $sku = $_GET['sku'];
    $product = getProductBySku($sku);
    header('Content-Type: application/json');
    if ($product) {
        echo json_encode($product);
    } else {
        echo json_encode(['error' => 'Product not found']);
    }
}

// Handle POST request to create a new product
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $productId = createProduct($data);
    header('Content-Type: application/json');
    echo json_encode(['id' => $productId]);
}

// Handle DELETE request to delete a product by SKU
if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['sku'])) {
    $sku = $_GET['sku'];
    $success = deleteProduct($sku);
    header('Content-Type: application/json');
    if ($success) {
        echo json_encode(['message' => 'Product deleted successfully']);
    } else {
        echo json_encode(['error' => 'Product not found']);
    }
}
?>
