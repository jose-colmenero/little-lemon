import React from "react";
import "./About.css"

const About = () => {
    return (
        <main>
            <article className="about_article">
                <section className="about_text">
                    <h1 className="about_h1">Little Lemon</h1><br/>
                    <h2 className="about_h2">Chicago</h2><br/>
                    <h3 className="about_h3">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.t non  proident, sunt in </h3>
                </section>
                <section className="about_imgs">
                    <img className="img1 scaler" src={require("./restaurant chef A.jpg")} alt="chef" />
                    <img className="img2 scaler" src={require("./Mario and Adrian B.jpg")} alt="mario_and_adrian"/>
                </section>
            </article>
        </main>
    )
}

export default About