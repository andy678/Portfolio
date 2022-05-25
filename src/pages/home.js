import SkillBadge from "../components/skillBadge"
import Button from "../components/button";

export default function HomePage() {
   
    const computerSkills = ["HTML", "CSS", "JavaScript", "React", "jQuery", "Java", "Laravel 4.2", "Git", "Github/Bitbucket", "Docker", "Bootstrap", "Tailwind"]

    const english = "cn"

    return (
       <div className="h-screen">
        <div className="grid place-items-center">
          <span className="text-5xl pt-16 pb-10 font-rubik text-black dark:text-white">{english ? "HI, I'M " : "你好, 我是 "} <span className="text-blue-500">ANDY</span>.</span>
          <span className="text-5xl pb-10 font-rubik text-black dark:text-white">{english ? "WELCOME TO MY " : "欢迎来到我的 "}<span className="text-blue-500">{english ? "PORTFOLIO" : "简历"}</span>.</span>
          <div>
            <Button text={english ? "VIEW MY PROJECTS" : "看我的项目"} />
            <Button text={english ? "CONTACT ME" : "联系我"} />
          </div>
        </div>
       </div> 
    );
  }