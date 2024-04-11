import React from "react";
import "./Hero.css"

const Hero = () => {
    return (
        <main className="Hero">
            <div className="hero_div">
                <h1 className="hero_h1">Little Lemon</h1>
                <h2 className="hero_h2">Chicago</h2>
                <h3 className="hero_h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</h3>
                <button className="hero_button">Reserve a Table</button>
            </div>

            <img src={require("./restaurantfood.jpg")} alt="restaurant food" className="imgHero"/>
        </main>
    )
}

export default Hero