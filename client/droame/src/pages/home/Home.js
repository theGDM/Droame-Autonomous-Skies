import React from 'react'
import bgImg1 from './images/bg1.jpg';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <div className='home'>
                <img className='bgImage' src={bgImg1} alt='bg-img' />
                <div class="banner">
                    <h1 class="banner-heading">
                        {/* The heading will have the css animation, it will consist of four different text
                    elements and they will be represented by this span elements */}
                        <span class="heading-1" style={{ letterSpacing: '-10px' }}>We Are Droame</span>
                        <span class="heading-2">Autonomous Skies</span>
                        <span class="heading-3">India's Leading Drone Startup</span>
                        {/*Next we have to place them on top of each other and for that we need to set position
                    to absolute*/}
                    </h1>
                    <p class="banner-paragraph">Let's Touch The Sky</p>
                    <button class="banner-btn">Jaipur, India</button>
                </div>
            </div>
        </div>
    )
}

export default Home;