import React from "react";
import EarthFilled from "./images/earth-filled.png"
import EarthOutline from "./images/earth-outline.png"
import JupiterFilled from "./images/jupiter-filled.png"
import JupiterOutline from "./images/jupiter-outline.png"
import SaturnFilled from "./images/saturn-filled.png"
import SaturnOutline from "./images/saturn-outline.png"
 
export default function AgeDisplayPlanets(props){

   const age = props.daysOld
    //Days it takes each planet to revolute onces around the sun (calculated in Earth days 365.25)
   const daysRevolution = {
     Mercury: 87.97,
     Venus: 224.7,
     Earth: 365.25,
     Mars: 686.67,
     Jupiter: 4331.865,
     Saturn: 10760.265,
     Uranus: 30684.6525,
     Neptune: 60189.5475,
     Pluto: 90797.4975
   } 

   function calculateYears (revoultions){ 
     return (props.daysOld / revoultions).toFixed(2)
   }

    return(
       <div className="inline-block"> 
           Mercury: {calculateYears(1)}
           Venus: {calculateYears(daysRevolution.Venus)}
           Earth: {calculateYears(daysRevolution.Earth)}
          <img className="w-16 h-16" onMouseEnter={e => (e.currentTarget.src = EarthFilled)} onMouseLeave={e => (e.currentTarget.src = EarthOutline)} src={EarthOutline} />
          <img className="w-16 h-16" onMouseEnter={e => (e.currentTarget.src = JupiterFilled)} onMouseLeave={e => (e.currentTarget.src = JupiterOutline)} src={JupiterOutline} />
          <img className="w-16 h-16" onMouseEnter={e => (e.currentTarget.src = SaturnFilled)} onMouseLeave={e => (e.currentTarget.src = SaturnOutline)} src={SaturnOutline} />
          <img className="w-16 h-16" onMouseEnter={e => (e.currentTarget.src = SaturnFilled)} onMouseLeave={e => (e.currentTarget.src = SaturnOutline)} src={SaturnOutline} />
           Mars: {calculateYears(daysRevolution.Mars)}    
           Jupiter: {calculateYears(daysRevolution.Jupiter)}
           Saturn: {calculateYears(daysRevolution.Saturn)}
           Uranus: {calculateYears(daysRevolution.Uranus)}
       </div>
     ) 
}