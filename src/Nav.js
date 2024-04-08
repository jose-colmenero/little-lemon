import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(

        <nav>
            <ul>
                <li><Link to="/" className="">Home</Link></li>
                <li><Link to="/menu" className="">Menu</Link></li>
                <li><Link to="/reservations" className="">Reservations</Link></li>
                <li><Link to="/order-online" className="">Order Online</Link></li>
                <li><Link to="/about" className="">About</Link></li>
                <li><Link to="/login" className="">Login</Link></li>
            </ul>
        </nav>

    )
}

export default Nav