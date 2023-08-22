import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';

import Work from '../components/Work';

const Project = () => {
  return (
    <div>
<Navbar />
<HeroImg2 heading = "PROJECT" text = "some of my recent works" />
<Work />
 
<Footer /> 
    </div>
  )
}

export default Project;