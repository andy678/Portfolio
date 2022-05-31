import { LinkIcon } from "@heroicons/react/solid";
import logo from '../../images/tic.png'
import Button from "../button";

export default function ProjectBox(props) {

    return (
      <div className="box-border border-4">
          <div className="box-border h-64 w-64 border-4">
        <img src={props.image}></img>
      </div>
      <Button src={props.websiteUrl} text="View Website" /><Button text="View Website" /> 

      </div>
    );
  }