import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import OurRange from './SectionTitleHeaders/OurRange'
import RangeCards from './RangeCards/RangeCards'
import WelcomeBanner from './WelcomeBanner/WelcomeBanner'
import DeliciouslyClimate from './SectionTitleHeaders/DeliciouslyClimate'
import FoodExplainer from './FoodExplainer/FoodExplainer'
import ProductsListing from './ProductListing/ProductsListing'
import axios from 'axios';
import AboutUs from './About/AboutUs'

const Home = () => {

   

  return (

    <div  className='main-div'>
        <Header />
        <WelcomeBanner />
        <OurRange />
        <RangeCards />

        <DeliciouslyClimate />
        <FoodExplainer />

        <ProductsListing />
        <AboutUs />


        
    </div>
  )
}

export default Home