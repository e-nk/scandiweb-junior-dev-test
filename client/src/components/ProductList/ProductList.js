import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API endpoint
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://enock-scandiweb-api.idealcis.com');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const handleMassDelete = async () => {
    try {
      // Delete the selected products using the API endpoint
      for (const productId of selectedProducts) {
        await fetch(`https://enock-scandiweb-api.idealcis.com/${productId}`, {
          method: 'DELETE',
        });
        console.log('Deleting product with ID:', productId);
      }
      // Refresh the product list after successful deletion
      fetchProducts();
      // Clear the selectedProducts state
      setSelectedProducts([]);
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard
              product={product}
              isSelected={selectedProducts.includes(product.id)}
              onCheckboxChange={() => handleCheckboxChange(product.id)}
            />
          </div>
        ))}
      </div>
      <button className="btn btn-danger" onClick={handleMassDelete}>
        MASS DELETE
      </button>
    </div>
  );
};

export default ProductList;
