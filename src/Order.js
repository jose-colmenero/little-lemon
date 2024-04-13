import React from "react";
import { Link } from "react-router-dom";
import "./Order.css"

const Order = () => {
    return (
        <main className="order_online">
            <h1>Sorry, this page is still under construction!</h1>
            <Link to="/"><img src={require("./wrench.png")} alt="logo" className="wrench lilscaler"/></Link>
        </main>
    )
}

export default Order