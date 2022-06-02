import ProjectBox from "../../components/projects/projectBox";
import PageTitle from "../../components/pageTitle";

export default function ProjectsPage() {

  const data = [
    {
      name: "Portfolio Website",
      url: "www.website.co.uk",
      description: "this is a description",
      tools: ["css", "javascript", "react", "tailwind"]
    },
    {
      name: "Teaching In China",
      url: "www.teachinginchina.co.uk",
      description: "this is a description",
      tools: ["wix", "javascript"]
    },
    {
      name: "Class Tools",
      url: "www.classtools.net",
      description: "class tools",
      tools: ["css", "javascript", "react", "tailwind"]
    },
    {
      name: "JOB ESL Board",
      url: "www.google.co.uk",
      description: "JOBS FOR YOU",
      tools: ["css", "javascript", "react", "tailwind"]
    }
  ]
  
    return (
      <>
        <PageTitle text="MY PROJECTS"/>
        { data.map((data) => (
          <ProjectBox name={data.name} url={data.url} img={data.img} tools={data.tools} description={data.description} />
        )) }
      </>
    );
  }