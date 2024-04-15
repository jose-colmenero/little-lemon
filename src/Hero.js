import React from "react";
import "./Hero.css"
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/reservations")
    }

    return (
        <main className="herobackground">
            <div className="hero">
                <div className="hero_div">
                    <h1 className="hero_h1">Little Lemon</h1>
                    <h2 className="hero_h2">Chicago</h2>
                    <h3 className="hero_h3">We are a Mediterranean restaurant, focused on traditional recipes served with a modern twist!</h3>
                    <Button title="Reserve a Table" styler={"button"} onClick={handleClick} valid={true} />
                </div>

                <img src={require("./restaurantfood.jpg")} alt="restaurant food" className="imgHero"/>
            </div>
        </main>
    )
}

export default Hero