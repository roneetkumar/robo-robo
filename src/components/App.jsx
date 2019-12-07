import React from "react";
import Nav from "./Nav/Nav";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/About">
                    <About />
                </Route>
                <Route exact path="/Introduce-RoboRobo-Kits">
                    <IntroduceRoboRoboKits />
                </Route>
                <Route exact path="/Product">
                    <Product />
                </Route>
                <Route exact path="/Our-Gallery">
                    <OurGallery />
                </Route>
                <Route exact path="/Contacts">
                    <Contacts />
                </Route>
                <Route exact path="/Event">
                    <Event />
                </Route>
                <Route exact path="/News">
                    <News />
                </Route>
            </Switch>
        </Router>
    )
}

function IntroduceRoboRoboKits() {
    return <h2>IntroduceRoboRoboKits</h2>;
}

function Product() {
    return <h2>Product</h2>;
}

function OurGallery() {
    return <h2>OurGallery</h2>;
}

function Contacts() {
    return <h2>Contacts</h2>;
}

function Event() {
    return <h2>Event</h2>;
}

function News() {
    return <h2>News</h2>;
}

export default App;



