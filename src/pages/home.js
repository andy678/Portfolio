import SkillBadge from "../components/skillBadge"
import Button from "../components/button";

export default function HomePage() {
   
    const computerSkills = ["HTML", "CSS", "JavaScript", "React", "jQuery", "Java", "Laravel 4.2", "Git", "Github/Bitbucket", "Docker", "Bootstrap", "Tailwind"]

    return (
       <div className="h-screen">
        <div className="grid place-items-center">
          <span className="text-5xl pt-16 pb-10 font-rubik text-black dark:text-white">HI, I'M <span className="text-blue-500">ANDY</span>.</span>
          <span className="text-5xl pb-10 font-rubik text-black dark:text-white">WELCOME TO MY <span className="text-blue-500">PORTFOLIO</span>.</span>
          <div>
            <Button text="VIEW MY PROJECTS" />
            <Button text="CONTACT ME" />
          </div>
        </div>
       </div> 
    );
  }