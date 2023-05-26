import { Route, Switch } from "react-router-dom";
import Products from './Pages/Products'
import AddProduct from './Pages/AddProduct'
import React from "react";

export const Routes =() => (
    <Switch>
        <Route path="/">
            <Products/>
        </Route>
        <Route path="/addproduct">
            <AddProduct/>
        </Route>
    </Switch>
);