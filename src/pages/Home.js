import React from 'react'
import { Link } from 'react-router-dom'
// import BannerImage from '../assets/pizza.jpeg'
import BannerImage from '../assets/hero_bg.jpg'
import "../styles/Home.css"

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>
                    Ayaz Fruits Store
                </h1>
                <p>
                    Всегда солнечные овощи и фрукты
                </p>
                <Link to='/menu'>
                    <button>
                        Звоните сейчас!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home