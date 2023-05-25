import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import ProductList from "../ProductList/ProductList";

function Navbar() {
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
              <Link className="btn btn-success" to="/addproduct">
                ADD
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="line"></div>
      <br></br>
      <ProductList />
      <br></br>

      <div className="footer">
        <div className="line"></div>
        <h4>Scandiweb Test Assignment</h4>
      </div>
    </>
  );
}

export default Navbar;



