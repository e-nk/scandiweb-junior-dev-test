<?php
require_once 'product.php';

// Handle GET request to retrieve all products or a single product by ID
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $product = getProductById($id);
        header('Content-Type: application/json');
        if ($product) {
            echo json_encode($product);
        } else {
            echo json_encode(['error' => 'Product not found']);
        }
    } else {
        $products = getAllProducts();
        header('Content-Type: application/json');
        echo json_encode($products);
    }
}

// Handle POST request to create a new product
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $productId = createProduct($data);
    header('Content-Type: application/json');
    echo json_encode(['id' => $productId]);
}

// Handle DELETE request to delete a product by ID
if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_SERVER['REQUEST_URI'])) {
    $urlParts = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($urlParts);
    $success = deleteProduct($id);
    header('Content-Type: application/json');
    if ($success) {
        echo json_encode(['message' => 'Product deleted successfully']);
    } else {
        echo json_encode(['error' => 'Product not found']);
    }
}
?>
