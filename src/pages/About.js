import React from 'react'
import AboutBackground from "../assets/about_bg.jpg"
import "../styles/About.css"

function About() {
    return (
        <div className='about'>
            <div className="aboutTop" style={{ backgroundImage: `url(${AboutBackground})` }}>

            </div>
            <div className="aboutBottom">
                <h1>О нас</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet iusto, aperiam tempora velit voluptate iure possimus reiciendis recusandae nulla odit neque voluptatibus officia quam facere amet cupiditate, dolorum tempore.</p>
            </div>
        </div>
    )
}

export default About