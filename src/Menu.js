import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"

const Menu = () => {
    return (
        <main className="menu">
            <h1>Sorry, this page is still under construction!</h1>
            <Link to="/"><img src={require("./wrench.png")} alt="logo" className="wrench lilscaler"/></Link>
        </main>
    )
}

export default Menu