import React from "react";
import { NavLink } from "react-router-dom";

const Header=()=>(
    <header>
        <h1>expensify</h1>
        <NavLink to="/" activeClassName="is-active">home </NavLink>
        <NavLink to="/AddExpensePage" activeClassName="is-active">create expense </NavLink>
        <NavLink to="/help" activeClassName="is-active">help </NavLink>
        <NavLink to="/edit" activeClassName="is-active">edit </NavLink>
    </header>
);
export default Header;