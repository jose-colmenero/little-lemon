import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer_columns">

                <Link to="/"><img src={require("./footer_logo.png") } alt="footer_logo" className="footer_logo"/></Link>

                <ul className="doormat column">
                    <li className="footer_li"><h1 className="footer_h1">Doormat Navigation</h1></li>
                    <li className="footer_li scaler"><Link to="/">Home</Link></li>
                    <li className="footer_li scaler"><Link to="/menu">Menu</Link></li>
                    <li className="footer_li scaler"><Link to="/reservations">Reservations</Link></li>
                    <li className="footer_li scaler"><Link to="/order-online">Order Online</Link></li>
                    <li className="footer_li scaler"><Link to="/about">About</Link></li>
                    <li className="footer_li scaler"><Link to="/login">Login</Link></li>
                </ul>
                <ul className="contact column">
                    <li className="footer_li"><h1 className="footer_h1">Contact</h1></li>
                    <li className="footer_li"><h2 className="footer_h2">Adress</h2></li>
                    <li className="footer_li"><h2 className="footer_h2">Phone number</h2></li>
                    <li className="footer_li"><h2 className="footer_h2">Email</h2></li>
                </ul>
                <ul className="social column">
                    <li className="footer_li"><h1 className="footer_h1">Socials</h1></li>
                    <li className="footer_li"><a href="https://meta.com/littlelemon"><img src={require("./meta_logo.png")} alt="meta_logo" className="socials"/></a></li>
                    <li className="footer_li"><a href="https://instagram.com/littlelemon"><img src={require("./instagram_logo.webp")} alt="instagram_logo" className="socials"/></a></li>
                    <li className="footer_li"><a href="https://x.com/littlelemon"><img src={require("./x_logo.png")} alt="x_logo" className="socials"/></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer