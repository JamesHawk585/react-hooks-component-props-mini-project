import React from "react";
import blogData from "../data/blog";


function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside>
            <img src={image} alt="blog Logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;