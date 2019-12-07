import React, { Component } from "react";
import NavListItem from "./NavListItem";
import { Link } from "react-router-dom";

class NavList extends Component {

    state = {
        listItems: [
            {
                name: "Home",
                link: "/"
            },
            {
                name: "About us",
                link: "/About"
            },
            {
                name: "Introduce RoboRobo Kits",
                link: "/Introduce-RoboRobo-Kits"
            },
            {
                name: "Product",
                link: "/Product"
            },
            {
                name: "Our Gallery",
                link: "/Our-Gallery"
            },
            {
                name: "Contacts",
                link: "/Contacts"
            },
            {
                name: "Event",
                link: "/Event"
            }]
    }

    render() {
        return (
            <ul>
                {
                    this.state.listItems.map(({ name, link }, key) => <Link to={link} key={key}><NavListItem title={name}></NavListItem></Link>)
                }
            </ul>
        )
    }
}

export default NavList;



