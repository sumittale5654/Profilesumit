import { NavLink } from "react-router-dom";
import "../components/AbouteContentstyle.css";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";


import React from 'react'

const AboutContent = () => {
   return (
      <div className="about">
         <div className="left">
            <h1>Who Am I</h1>
            <p>My name is Sumit Tale. I'm an Btech student at Goverment College Of Enginnering Yavatmal. I was born and raised in Akola Maharashtra.
               A highly motivated and hardworking individual skilled in full stack and
               Python. Seeking a position to utilize the gained skills and experience to positively
               contribute to the company.
            </p>
            <NavLink to="/contact">
               <button className="btn">Contact</button>
            </NavLink>
         </div>
         <div className="right">
            <div className="img-container">
               <div className="img-stack top">
                  <img src={p8} className="img" alt="true" />
               </div>
               <div className="img-stack bottom">
                  <img src={p9} className="img" alt="true" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutContent;