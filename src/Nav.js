import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom";

const Nav = () => {
    return(

        <nav className="nav">
            <ul>
                <li><Link to="/" className="scaler">Home</Link></li>
                <li><Link to="/menu" className="scaler">Menu</Link></li>
                <li><Link to="/reservations" className="scaler">Reservations</Link></li>
                <li><Link to="/order-online" className="scaler">Order Online</Link></li>
                <li><Link to="/about" className="scaler">About</Link></li>
                <li><Link to="/login" className="scaler">Login</Link></li>
            </ul>
        </nav>

    )
}

export default Nav