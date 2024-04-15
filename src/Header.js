import React from "react";
import "./Header.css"
import Nav from "./Nav"
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="headerdiv">
                <Link to="/" ><img src={require("./logo.png")} alt="logo" className="headerimg"/></Link>
                <Nav />
            </div>
        </header>
    )
}

export default Header