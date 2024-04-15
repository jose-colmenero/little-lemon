import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <main className="login">
            <h1>Sorry, this page is still under construction!</h1>
            <br/>
            <Link to="/"><img src={require("./wrench.png")} alt="logo" className="wrench lilscaler"/></Link>
        </main>
    )
}

export default Login