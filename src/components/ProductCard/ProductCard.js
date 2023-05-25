import React from 'react';

const ProductCard = ({ product, isSelected, onCheckboxChange }) => {
  const { sku, name, price, size, weight, height, width, length } = product;

  return (
    <div className="card">
      <div className="card-header">
        <input type="checkbox" checked={isSelected} onChange={onCheckboxChange} />
      </div>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{sku}</h5>
        <p className="card-text text-center">
          {name && <>{name}<br /></>}
          {price && <>{price}.00 $<br /></>}
          {size && <>Size: {size} MB<br /></>}
          {weight && <>Weight: {weight}KG<br /></>}
          {height && width && length && <>Dimensions: {height}x{width}x{length}<br /></>}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
