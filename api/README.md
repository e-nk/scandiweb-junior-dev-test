# Product API

The Product API is a PHP-based RESTful API that allows you to manage products in a database. It provides endpoints for retrieving all products, retrieving a single product by ID, creating a new product, and deleting a product by ID.

## Getting Started

These instructions will help you set up and run the Product API on your local machine for development and testing purposes. 

### Prerequisites

To run the Product API, you need the following software installed on your machine:

- PHP (version 5.6 or above)
- MySQL (or any other compatible database)

### Installation

1. Clone the repository or download the source code:

        git clone git@github.com:e-nk/scandiweb-junior-dev-test.git


2. Configure the database:

- Open the `db_config.php` file.
- Replace the values of `$host`, `$dbName`, `$username`, and `$password` with your own database configuration.

3. Import the database schema:

- Create a new database in your MySQL server.
- Import the `product_db.sql` file located in the root directory of the project into your newly created database. This file contains the necessary table structure.

4. Start the PHP development server:

        cd scandiweb-junior-dev-test/api


The API will now be accessible at `http://localhost:8000`.

## API Endpoints

The Product API provides the following endpoints:

### Retrieve all products

- URL: `GET /`
- Description: Fetches all products from the database.
- Response: Array of product objects in JSON format.

### Retrieve a single product by ID

- URL: `GET /{id}`
- Description: Fetches a single product by its ID.
- Parameters:
  - `{id}` (required): The ID of the product.
- Response: The product object in JSON format, or an error message if the product is not found.

### Create a new product

- URL: `POST /`
- Description: Creates a new product in the database.
- Request Body: JSON object containing the product details (sku, name, price, productType, size, weight, height, width, length).
- Response: The ID of the newly created product.

### Delete a product by ID

- URL: `DELETE /{id}`
- Description: Deletes a product from the database by its ID.
- Parameters:
  - `{id}` (required): The ID of the product.
- Response: Success message if the product is deleted successfully, or an error message if the product is not found.

## Examples

Here are some examples of how to use the Product API endpoints:

### Retrieve all products

GET http://localhost:8000


### Retrieve a single product by ID
GET http://localhost:8000/1


### Create a new product

POST http://localhost:8000

Request Body:

        {
        "sku": "ABC123",
        "name": "Product Name",
        "price": 10,
        "productType": "Type",
        "size": "Size",
        "weight": 0.5,
        "height": 10,
        "width": 5,
        "length": 8
        }


### Delete a product by ID

DELETE http://localhost:8000/1



## Contributing

Contributions to the Product API are welcome! If you find any issues or would like to suggest improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).







