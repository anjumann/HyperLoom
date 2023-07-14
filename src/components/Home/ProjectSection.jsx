import React from "react";
import ProjectCard from "../elements/ProjectCard";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const ProjectSection = () => {
  return (
    <div className="screen-width mt-16 ">
      <h3 className="eyebrow text-center ">Project by Community</h3>
      <h3 className="heading-1 w-fit mx-auto mt-5">Explore project</h3>
      <div className="card-wrapper ">
        <ProjectCard className="quickCard-hover " />
        <ProjectCard className="quickCard-hover " />
        <ProjectCard className="quickCard-hover " />
        <ProjectCard className="quickCard-hover " />
      </div>
      <div className="flex mt-6 justify-center gap-2">
       <Button className='w-fit' > Explore All project <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300 " /> </Button> 
      </div>
    </div>
  );
};

export default ProjectSection;
