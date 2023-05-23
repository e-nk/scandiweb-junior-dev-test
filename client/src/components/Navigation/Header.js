import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct'
import ProductList from '../Pages/ProductList';
import './Navbar.css'

function Header(){
    return (
        <Router>
            <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
                <div className="container-fluid">
                    <ul>
                    <li className="logo nav-header  custom-link">
                        <Link to="/addproduct">Product Add</Link>
                    </li>
                    </ul>
                    <ul className="nav nav-pills margin-right">
                        
                        <li className="nav-item custom-link">
                        <Link className="btn btn-primary" to="/">Save</Link>
                        </li>
                        <li className="nav-item ms-1  custom-link">
                        <Link className="btn btn-warning" to="/">Cancel</Link>
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

export default Header;