import React from "react";
import "./About.css"

const About = () => {
    return (
        <main>
            <article className="about_article">
                <section className="about_text">
                    <h1 className="about_h1">Little Lemon</h1><br/>
                    <h2 className="about_h2">Chicago</h2><br/>
                    <h3 className="about_h3">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.<br/><br/>
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</h3>
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