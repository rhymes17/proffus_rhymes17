import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <section className='header'>
        <div className='header__logo'>
            <img src={logo} alt="logo"/>
            <h1>Sea-Basket</h1>
        </div>

        <div className='header__links'>
            <h4 className='header__link'>Category</h4>
            <h4 className='header__link'>FAQs</h4>
            <h4 className='header__link'>My Cart</h4>
            <button className='primary__button btn'>Login</button>
        </div>
    </section>
  )
}

export default Header