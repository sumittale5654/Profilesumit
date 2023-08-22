import "../components/Workcardstyle.css";
import React from 'react'
import Pricingdata from "../components/Pricingdata";
import Pricingcard from "../components/Pricingcard";


const Pricing = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">More Activity</h1>
      <div className="project-container">
        {Pricingdata.map((val, ind) => {
            return(
                <Pricingcard 
                 key = {ind}
                 imgsrc = {val.imgsrc}
                 title = {val.title}
                 text = {val.text}
                 view = {val.view}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Pricing;