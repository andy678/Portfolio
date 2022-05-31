import React from "react";
import ProjectBoxIcon from "./projectBoxIcons"
import Button from "../../../components/button";
 
export default function ProjectBox(props){

    const icons = props.tools

    return(
       <div className="w-2/3 pb-20 font-rubik shadow-md hover:shadow-lg inline-block">
           {console.log("PROJECT BOX")}
           <h1 className="text-5xl text-blue-500 pt-8">{props.name}</h1>
            {    icons.map((icon) => (
                <ProjectBoxIcon icon={icon} />
            )) }
            <h3>{props.description}</h3>
            {props.url ? <Button text="VIEW THE PROJECT" /> : null}
           {props.gitHubURL ? <Button text="VIEW GITHUB" /> : null}
       </div>
     ) 
}