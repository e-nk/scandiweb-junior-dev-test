import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProductForm from '../AddProductForm/AddProductForm';
import './Navbar.css';

const Header = () => {
  const [productType, setProductType] = useState('');
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

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
      const response = await fetch('https://enock-scandiweb-api.idealcis.com', {
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
        setProductType('');
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
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item logo nav-header custom-link">
              <Link to="/addproduct">Product Add</Link>
            </li>
          </ul>
          <ul className="nav nav-pills margin-right">
            <li className="nav-item custom-link">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save
              </button>
            </li>
            <li className="nav-item ms-1 custom-link">
              <Link className="btn btn-warning" to="/">
                Cancel
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="line"></div>
      <br></br>
      <AddProductForm
        sku={sku}
        setSku={setSku}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        productType={productType}
        setProductType={setProductType}
        size={size}
        setSize={setSize}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        width={width}
        setWidth={setWidth}
        length={length}
        setLength={setLength}
        handleSubmit={handleSubmit} // Pass the handleSubmit function as prop
      />
      <br></br>
      <br></br>
      <br></br>

      <div className="footer">
        <div className="line"></div>
        <h4>Scandiweb Test Assignment</h4>
      </div>
    </>
  );
};

export default Header;
