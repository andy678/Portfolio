import AboutSection from "../section/about"
import ContactSection from "../section/contact"
import ProjectsSection from "../section/projects"
import LearningSection from "../section/learning"
import SkillBadge from "../components/skillBadge"

export default function HomePage() {
   
    const computerSkills = ["HTML", "CSS", "JavaScript", "React", "jQuery", "Java", "Laravel 4.2", "Git", "Github/Bitbucket", "Docker", "Bootstrap", "Tailwind"]

    return (
       <>
         <AboutSection />
         <ContactSection />
         <ProjectsSection />
         <LearningSection />
         <h1 className="text-5xl">MY EXPERIENCE</h1>
              {computerSkills.map((skill) =>
                <SkillBadge skills={skill} />
                )}
       </> 
    );
  }