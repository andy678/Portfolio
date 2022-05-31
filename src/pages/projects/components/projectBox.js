import React from "react";
import ProjectBoxIcon from "./projectBoxIcons"
import Button from "../../../components/button";
 
export default function ProjectBox(props){

    const icons = props.tools

    return(
       <div className="w-2/4 shadow-md hover:shadow-lg inline-block bg-gray-100">
           {console.log("PROJECT BOX")}
           <h1 className="text-xxl text-blue-800">{props.name}</h1>
            {    icons.map((icon) => (
                <ProjectBoxIcon icon={icon} />
            )) }
            <h3>{props.description}</h3>
            {props.url ? <Button text="VIEW THE PROJECT" /> : null}
           {props.gitHubURL ? <Button text="VIEW GITHUB" /> : null}
       </div>
     ) 
}