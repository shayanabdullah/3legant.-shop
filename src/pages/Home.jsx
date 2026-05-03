import React from 'react'
import Hero from '../components/Hero'
import HeroGrid from '../components/HeroGrid'
import NewArrivals from '../components/NewArrivals'
import StoreFeatures from '../components/StoreFeatures'
import PromoBanner from '../components/PromoBanner'

const Home = () => {
  return (
    <>
    <Hero/>
    <HeroGrid/>
    <NewArrivals/>
    <StoreFeatures/>
    <PromoBanner/>
    </>
  )
}

export default Home