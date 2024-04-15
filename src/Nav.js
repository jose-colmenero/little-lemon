import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom";

const Nav = () => {
    return(

        <nav>
            <ul className="nav">
                <li className="navitem scaler"><Link to="/" >Home</Link></li>
                <li className="navitem scaler"><Link to="/menu" >Menu</Link></li>
                <li className="navitem scaler"><Link to="/reservations" >Reservations</Link></li>
                <li className="navitem scaler"><Link to="/order-online" >Order Online</Link></li>
                <li className="navitem scaler"><Link to="/about" >About</Link></li>
                <li className="navitem scaler"><Link to="/login" >Login</Link></li>
            </ul>
        </nav>

    )
}

export default Nav