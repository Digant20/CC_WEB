import React from 'react'
import Header from './Header/Header'
import OurRange from './SectionTitleHeaders/OurRange'
import RangeCards from './RangeCards/RangeCards'
import WelcomeBanner from './WelcomeBanner/WelcomeBanner'
import DeliciouslyClimate from './SectionTitleHeaders/DeliciouslyClimate'
import FoodExplainer from './FoodExplainer/FoodExplainer'

const Home = () => {


  return (

    <div  className='main-div'>
        <Header />
        <WelcomeBanner />
        <OurRange />
        <RangeCards />

        <DeliciouslyClimate />
        <FoodExplainer />


        
    </div>
  )
}

export default Home