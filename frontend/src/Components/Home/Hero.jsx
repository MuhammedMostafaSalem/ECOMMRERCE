import React from 'react'
import onlineShoppingOnLaptop from '../../images/online-shopping-on-laptop.png'

const Hero = () => {
    return (
        <div className='heroSection'>
            <p>welcome to ecommerce</p>
            <div className='heroImg'>
                <img src={onlineShoppingOnLaptop} alt='' />
            </div>
            <h3>find amazing products below</h3>
        </div>
    )
}

export default Hero