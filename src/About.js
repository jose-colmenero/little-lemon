import React from "react";

const About = () => {
    return (
        <main>
            <article>
                <section>
                    <h1>Little Lemon</h1><br/>
                    <h2>Chicago</h2><br/>
                    <h3>Lorem ipsum aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>
                </section>
                <section>
                    <img src={require("./logo.png")} alt="logo"/>
                    <img src={require("./logo.png")} alt="logo"/>
                </section>
            </article>
        </main>
    )
}

export default About