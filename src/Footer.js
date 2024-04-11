import React from "react";
import "./Footer.css"

import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="footer">
            
            <div className="footer_columns">
                <a href="/" ><img src={require("./footer_logo.png") } alt="footer_logo" className="footer_logo"/></a>
                <ul>
                    <li><h1>Doormat Navigation</h1></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <ul>
                    <li><h1>Contact</h1></li>
                    <li><h2>Adress</h2></li>
                    <li><h2>Phone number</h2></li>
                    <li><h2>Email</h2></li>
                </ul>
                <ul>
                    <li><h1>Socials</h1></li>
                    <li><a href="https://meta.com/littlelemon"><img src={require("./meta_logo.png")} alt="meta_logo" className="socials"/></a></li>
                    <li><a href="https://instagram.com/littlelemon"><img src={require("./instagram_logo.webp")} alt="instagram_logo" className="socials"/></a></li>
                    <li><a href="https://x.com/littlelemon"><img src={require("./x_logo.png")} alt="x_logo" className="socials"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer