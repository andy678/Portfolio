import React from "react";
 
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
       <> 
           Mercury: {calculateYears(1)}
           Venus: {calculateYears(daysRevolution.Venus)}
           Earth: {calculateYears(daysRevolution.Earth)}
           Mars: {calculateYears(daysRevolution.Mars)}    
           Jupiter: {calculateYears(daysRevolution.Jupiter)}
           Saturn: {calculateYears(daysRevolution.Saturn)}
           Uranus: {calculateYears(daysRevolution.Uranus)}
           Nepune:
       </>
     ) 
}