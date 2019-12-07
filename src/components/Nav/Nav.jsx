import React, { Component } from "react";
import "./Nav.css";
import Logo from "./Logo";
import NavList from "./NavList";
import { Link } from "react-router-dom";



class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <NavList />

            </nav >
        )
    }
}

export default Nav;



