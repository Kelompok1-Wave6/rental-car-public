import React from 'react'
import Banner from './Banner'
import FaqSection from './FaqSection'
import HeroSection from './HeroSection'
import OurserSection from './OurserSection'
import TestiSection from './TestiSection'
import WhyUs from './WhyUs'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <OurserSection/>
        <WhyUs/>
        <TestiSection/>
        <Banner/>
        <FaqSection/>
    </>
  )
}

export default Home