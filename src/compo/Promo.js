import React from 'react'
import promo  from '../assets/promo.png'
import Category from './Category'

import logo from '../assets/logo.png'

import FAQ from './FAQ'
import useFirestore from './useFirestore'

const Promo = () => {

    const {docs} = useFirestore('images');

  return (
    <>

    <section className='promo'>
        <img src={promo} alt="promo" />
    </section>

    <section className='how'>
        <div className="heading">
            <h1 className='heading__main'>
                HOW IT WORKS
            </h1>
            <p className='heading__sec'>
                Sea Basket delivers fresh sources seafood in a few easy clicks
            </p>
        </div>
    </section>

    <section className='categories'>
        <h2>CATEGORIES</h2>

        <div className='categories__div'>

        {docs && docs.map(doc => (
          <div 
          key={ doc.id }
          >
              <Category imgURL={doc.imgUrl} name={doc.name} key ={doc.id} />
          </div>
            
        ))}
            
        </div>
        
    </section>

    <section className='glance'>
        <div className="heading">
            <h1 className='heading__main'>
                A Glance at our product
            </h1>
            
            <div className='video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/e90Iz4CooJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    </section>


    <section className='faqs__div'>
            <h1 className='heading__main'>
                FAQ
            </h1>

        <FAQ text="Sea Basket delivers fresh sources seafood in a few easy clicks"/>
        <FAQ text="Sea Basket delivers fresh sources seafood in a few easy clicks"/>
        <FAQ text="Sea Basket delivers fresh sources seafood in a few easy clicks"/>

    </section>

    <section className='footer'>
            <div className='footer__div'>
                <img src={logo} alt='logo' />

                <div className='footer__links'>
                    <h4 className='header__links'>Support</h4>
                    <h4 className='header__links'>About Us</h4>
                    <h4 className='header__links'>Terms & Conditions</h4>
                    
                </div>
                <div className='footer__links'>
                <h4 className='header__links'>Return & Refund Policy</h4>
                    <h4 className='header__links'>Shipping & Devlivery Policy</h4>
                    <h4 className='header__links'>Privacy Policy</h4>
                </div>
            </div>
            <p className='rights'>Sea Basket | All Rights Reserved | &#169; 2021 Copyright</p>
    </section>

    </>
    

  )
}

export default Promo