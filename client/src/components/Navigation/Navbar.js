import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import ProductList from "../ProductList/ProductList";

function Navbar() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const history = useHistory();

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
      // Clear the selectedProducts state
      setSelectedProducts([]);
      // Fetch the updated product list after successful deletion
      fetchProducts();
    } catch (error) {
      console.error('Error deleting products:', error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item logo nav-header custom-link">
              <Link to="/">Product List</Link>
            </li>
          </ul>
          <ul className="nav nav-pills margin-right">
            <li className="nav-item custom-link">
            <button className="btn btn-success" onClick={() => {history.push('/addproduct');
            window.location.reload();
            }}>ADD</button>

            </li>
            <li className="nav-item ms-1 custom-link">
              <button className="btn btn-danger" onClick={handleMassDelete}>MASS DELETE</button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="line"></div>
      <br></br>
      <ProductList
        products={products}
        selectedProducts={selectedProducts}
        onCheckboxChange={handleCheckboxChange}
        fetchProducts={fetchProducts}
      />
      <br></br>

      <div className="footer">
        <div className="line"></div>
        <p>Scandiweb Test Assignment</p>
      </div>
    </>
  );
}

export default Navbar;
