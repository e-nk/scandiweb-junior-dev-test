import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products, fetchProducts, selectedProducts, onCheckboxChange }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard
              product={product}
              isSelected={selectedProducts.includes(product.id)}
              onCheckboxChange={() => onCheckboxChange(product.id)}
              fetchProducts={fetchProducts}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
