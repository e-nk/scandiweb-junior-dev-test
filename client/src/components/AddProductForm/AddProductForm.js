import React, { useState } from 'react';
import './AddProduct.css'

const AddProductForm = () => {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      sku,
      name,
      price,
      productType,
      size: productType === 'DVD' ? size : null,
      weight: productType === 'Book' ? weight : null,
      height: productType === 'Furniture' ? height : null,
      width: productType === 'Furniture' ? width : null,
      length: productType === 'Furniture' ? length : null,
    };

    try {
      const response = await fetch('http://localhost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        // Product successfully added
        console.log('Product added:', product);
        // Reset form fields
        setSku('');
        setName('');
        setPrice('');
        setSize('');
        setWeight('');
        setHeight('');
        setWidth('');
        setLength('');
      } else {
        // Error occurred while adding the product
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form id="product_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            className="form-control"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
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
            <label htmlFor="size">Size (MB):</label>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddProductForm;
