import React from "react";
 
export default function Button(props){

    return(
        <>
        <button href={props.href} className="bg-blue-500 hover:bg-blue-400 dark:bg-white dark:text-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            {props && props.text ? props.text : null}
        </button>
        </>
     ) 
}