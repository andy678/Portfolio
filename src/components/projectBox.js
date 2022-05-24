import React from 'react';
import Button from '../components/button'

export default function ProjectBox(props) {

    return (
        <>
            <div className="h-64 w-64 relative dark:bg-slate-900 dark:text-white text-black">
                <b>{props.title}</b>
                <p>{props.description}</p>
                <button className="bg-slate-800 text-white" href={props.url}><Button text="view"/></button>
            </div>
        </>
    );
  }