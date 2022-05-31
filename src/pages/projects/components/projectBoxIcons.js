import JavascriptIcon from "./icons/js.png"
import CSSIcon from "./icons/css.png"
import ReactIcon from "./icons/react.png"
import TailwindIcon from "./icons/tailwind.png"
import WixIcon from "./icons/wix.png"
import BootstrapIcon from "./icons/bootstrap.png"
import GoogleAnalytics from "./icons/google-analytics.png"
 
export default function ProjectBoxIcons(props){

    let icon

    switch(props.icon) {
        case "javascript":
            icon = JavascriptIcon
            break;
        case "css":
            icon = CSSIcon
            break;
        case "react":
            icon = ReactIcon
            break;
        case "tailwind":
            icon = TailwindIcon
            break;
        case "wix":
            icon = WixIcon
            break; 
        case "bootstrap":
            icon = BootstrapIcon
            break;
        case "google-analytics":
            icon = GoogleAnalytics
            break              
      }

      return (
        <div className="inline-block font-bold"><img className="w-16 h-16 p-2" src={icon} alt={props.icon}></img>{props.icon}</div>
      )
}