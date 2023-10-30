import React from 'react'
import './Home.css'
import Hero from '../../Components/Home/Hero'
import HomeCategory from '../../Components/Category/HomeCategory'
import HomeProducts from '../../Components/Home/HomeProducts'

const Home = () => {
    return (
        <div className='homePage'>
            <Hero />
            <HomeCategory/>
            <HomeProducts/>
        </div>
    )
}

export default Home