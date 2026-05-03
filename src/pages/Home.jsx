import React from "react";
import Hero from "../components/home/Hero";
import HeroGrid from "../components/home/HeroGrid";
import NewArrivals from "../components/home/NewArrivals";
import StoreFeatures from "../components/home/StoreFeatures";
import PromoBanner from "../components/home/PromoBanner";
import Article from "../components/home/Article";


const Home = () => {
  return (
    <>
      <Hero />
      <HeroGrid />
      <NewArrivals />
      <StoreFeatures />
      <PromoBanner />
      <Article/>
    </>
  );
};

export default Home;
