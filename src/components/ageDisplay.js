import React from "react";
 
export default function AgeDisplay(){

    const date = new Date()
    const currentDate = date.getFullYear() + '/' + '0' + date.getMonth() + '/' + date.getDate()
    const birthDate = "1995/01/29"

    const calculateAgeDays = () => Math.abs(new Date(currentDate) - new Date(birthDate)) / (1000 * 3600 * 24)
    const calculateAgeHours = () => calculateAgeDays() * 24
    const calculateAgeYears = () => Math.floor(calculateAgeDays() / 365.25)

    return(
       <>
            <span>Earth Years {calculateAgeYears()} Earth Days {calculateAgeDays()} Hours {(calculateAgeHours())} </span>
       </>
     ) 
}