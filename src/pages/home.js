import { useContext } from "react";
import { LanguageContext } from '../context/languageContext';
import SkillBadge from "../components/skillBadge"
import Button from "../components/button";
import GitHubButton from 'react-github-btn'
import AgeDisplay from "../components/ageDisplay";

export default function HomePage() {
   
    const computerSkills = ["HTML", "CSS", "JavaScript", "React", "jQuery", "Java", "Laravel 4.2", "Git", "Github/Bitbucket", "Docker", "Bootstrap", "Tailwind"]
    const languageEN = useContext(LanguageContext)

    return (
       <div className="h-screen">
        <div className="grid place-items-center">
          <GitHubButton href="https://github.com/andy678" data-size="large" aria-label="Follow @andy678 on GitHub">Follow @andy678</GitHubButton>
          <span className="text-5xl pt-16 pb-10 font-rubik text-black dark:text-white">{languageEN ? "HI, I'M " : "你好, 我是 "} <span className="text-blue-500">ANDY</span>.</span>
          <span className="text-5xl pb-10 font-rubik text-black dark:text-white">{languageEN ? "WELCOME TO MY " : "欢迎来到我的 "}<span className="text-blue-500">{languageEN ? "PORTFOLIO" : "简历"}</span>.</span>
          <div>
            <Button text={languageEN ? "VIEW MY PROJECTS" : "看我的项目"} />
            <Button text={languageEN ? "CONTACT ME" : "联系我"} />
          </div>
          <AgeDisplay />
        </div>
       </div> 
    );
  }