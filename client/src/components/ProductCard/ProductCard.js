import React from 'react';

const ProductCard = ({ product, isSelected, onCheckboxChange, onDelete }) => {
  const { sku, name, price, productType, size, weight, height, width, length } = product;

  return (
    <div className="card">
      <div className="card-header">
        <input type="checkbox" checked={isSelected} onChange={onCheckboxChange} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{sku}</h5>
        <p className="card-text">
          {name}<br />
          {price}.00 $<br />
          {productType}<br />
          {size}<br />
          {weight}<br />
          Dimensions: {height}x{width}x{length}
        </p>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
