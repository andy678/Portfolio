import ProjectBox from "../components/projectBox"

export default function ProjectsSection() {
  
    return (
      <div id="projects" className="w-full h-full">
          <h1 className="text-5xl">PROJECTS</h1>
          <ProjectBox title="ESL JOB BOARD" description="hello."/>
          <ProjectBox title="PROJECT 2" description="how are you."/>
      </div>
    );
  }