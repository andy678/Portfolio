import SkillBadge from "../components/skillBadge"
import Button from "../components/button";

export default function HomePage() {
   
    const computerSkills = ["HTML", "CSS", "JavaScript", "React", "jQuery", "Java", "Laravel 4.2", "Git", "Github/Bitbucket", "Docker", "Bootstrap", "Tailwind"]

    return (
       <>
        <div className="w-full h-full">
          <h1 className="text-blue-500">Hi, I'm Andy</h1>
          <h1 className="text-blue-500">Welcome to my portfolio</h1>
          <Button text="VIEW MY PROJECTS" /> <Button text="CONTACT ME" />
      </div>
         <h1 className="text-5xl">MY EXPERIENCE</h1>
              {computerSkills.map((skill) =>
                <SkillBadge skills={skill} />
                )}
       </> 
    );
  }