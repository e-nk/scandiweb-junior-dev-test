import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct'
import ProductList from '../Pages/ProductList';
import Header from "./Header";
import './Navbar.css'

function Navbar(){
    return (
        <Router>
            <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
                <div className="container-fluid">
                    <ul>
                    <li className="logo nav-header  custom-link">
                        <Link to="/">Product List</Link>
                    </li>
                    </ul>
                    <ul className="nav nav-pills margin-right">
                        
                        <li className="nav-item custom-link">
                            <Link className="btn btn-success" to="/addproduct">ADD</Link>
                        </li>
                        <li className="nav-item ms-1  custom-link">
                            <button  className="btn btn-danger" id="delete-product-btn">MASS DELETE</button>
                        </li>
                    </ul>

                </div>
            </nav>
            <div class="line"></div>
        <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
        <div className="footer">
        <div class="line"></div>
            <h4>Scandiweb Test Assignment</h4>

        </div>


        </Router>
    )
}

export default Navbar;