import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer_columns">
                <div className="column">
                    <Link to="/"><img src={require("./footer_logo.png") } alt="footer_logo" className="footer_logo"/></Link>
                </div>
                <ul className="column">
                    <li><h1 className="footer_h1">Doormat Navigation</h1></li>
                    <li className="footer_li scaler"><Link to="/">Home</Link></li>
                    <li className="footer_li scaler"><Link to="/menu">Menu</Link></li>
                    <li className="footer_li scaler"><Link to="/reservations">Reservations</Link></li>
                    <li className="footer_li scaler"><Link to="/order-online">Order Online</Link></li>
                    <li className="footer_li scaler"><Link to="/about">About</Link></li>
                    <li className="footer_li scaler"><Link to="/login">Login</Link></li>
                </ul>
                <ul className="column">
                    <li><h1 className="footer_h1">Contact</h1></li>
                    <li className="footer_li"><h2 className="footer_h2">N Green St, Chicago, IL 60607</h2></li>
                    <li className="footer_li"><h2 className="footer_h2">(408) 858 - 1234</h2></li>
                    <li className="footer_li"><h2 className="footer_h2">contact@littlelemon.com</h2></li>
                </ul>
                <ul className="column">
                    <li><h1 className="footer_h1">Socials</h1></li>
                    <div className="row">
                        <li className="footer_li"><a href="https://meta.com/littlelemon"><img src={require("./facebook.png")} alt="facebook_logo" className="socials"/></a></li>
                        <li className="footer_li"><a href="https://instagram.com/littlelemon"><img src={require("./instagram.png")} alt="instagram_logo" className="socials"/></a></li>
                        <li className="footer_li"><a href="https://x.com/littlelemon"><img src={require("./x_logo_empty.png")} alt="x_logo" className="socials"/></a></li>
                    </div>
                </ul>

            </div>

        </footer>
    )
}

export default Footer