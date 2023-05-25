import React from "react";
import {Link } from 'react-router-dom';
import AddProduct from '../../Pages/AddProduct';
import './Navbar.css';

function Header() {
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
              <Link className="btn btn-primary" to="/">Save</Link>
            </li>
            <li className="nav-item ms-1 custom-link">
              <Link className="btn btn-warning" to="/">Cancel</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="line"></div>
      <br></br>
      <AddProduct />
      <br></br>
      <br></br>
      <br></br>
      
      <div className="footer">
        <div className="line"></div>
        <h4>Scandiweb Test Assignment</h4>
      </div>
    </>
  );
}

export default Header;
