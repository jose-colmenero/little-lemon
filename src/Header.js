import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <a href="https://littlelemon.com/home"><img src={require("./logo.png")} alt="logo"/></a>
        </header>
    )
}

export default Header