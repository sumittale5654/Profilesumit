import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/Heroimage";
import Footer from '../components/Footer';
import Work from '../components/Work';
import Pricing from '../components/Pricing';


function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImg /> 
      <Work />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Home;