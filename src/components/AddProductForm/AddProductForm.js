import React from 'react';
import './AddProduct.css';

const AddProductForm = ({
  sku,
  setSku,
  name,
  setName,
  price,
  setPrice,
  productType,
  setProductType,
  size,
  setSize,
  weight,
  setWeight,
  height,
  setHeight,
  width,
  setWidth,
  length,
  setLength,
  handleSubmit
}) => {
  const handleProductTypeChange = (e) => {
    const selectedType = e.target.value;
    setProductType(selectedType);
  };

  const getTypeText = () => {
    switch (productType) {
      case 'Furniture':
        return 'Please, provide dimensions';
      case 'DVD':
        return 'Please, provide size';
      case 'Book':
        return 'Please, provide weight';
      default:
        return '';
    }
  };

  const typeText = getTypeText();

  return (
    <div className="container" id="product_form">
      <form >
        <div className="form-group">
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            id="sku"
            className="form-control"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productType">Type Switcher</label>
          <div className="select-wrapper">
            <select
              id="productType"
              className="form-control"
              value={productType}
              onChange={handleProductTypeChange}
            >
              <option value="" disabled></option>
              <option value="DVD">DVD</option>
              <option value="Furniture">Furniture</option>
              <option value="Book">Book</option>
            </select>
          </div>
        </div>
        {productType === 'DVD' && (
          <div className="form-group">
            <label htmlFor="size">Size (MB)</label>
            <input
              type="text"
              id="size"
              className="form-control"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
        )}
        {productType === 'Book' && (
          <div className="form-group">
            <label htmlFor="weight">Weight (KG)</label>
            <input
              type="text"
              id="weight"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        )}
        {productType === 'Furniture' && (
          <div>
            <div className="form-group">
              <label htmlFor="height">Height (CM)</label>
              <input
                type="text"
                id="height"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="width">Width (CM)</label>
              <input
                type="text"
                id="width"
                className="form-control"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="length">Length (CM)</label>
              <input
                type="text"
                id="length"
                className="form-control"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
          </div>
        )}
      </form>
      {typeText && (
        <div className="text-center">
          <h4 className="text-bold">{typeText}</h4> 
        </div>
      )}
    </div>
  );
};

export default AddProductForm;
