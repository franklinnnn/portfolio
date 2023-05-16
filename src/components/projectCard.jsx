import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({
  project,
  setProjectDetails,
  setIsDetailComponentVisible,
}) => {
  const handleProjectDetails = () => {
    setProjectDetails(project);
    setIsDetailComponentVisible(true);
  };

  return (
    <section
      className="group flex max-sm:flex-col gap-2 md:my-6 my-8 w-full md:h-48 hover:bg-slate-500/10"
      key={project.title}
    >
      <a
        className="md:w-3/5 overflow-hidden rounded-sm h-48"
        href={project.url}
        target="_blank"
      >
        <img
          src={project.img}
          alt={project.desc}
          className="object-cover w-full h-full"
        />
      </a>
      <div className="flex flex-col justify-between p-1 md:w-2/5">
        <a
          className="text-xl font-semibold group-hover:text-primary"
          href={project.url}
          target="_blank"
        >
          {project.title}
        </a>
        <p className="md:text-md max-sm:text-sm">{project.desc}</p>
        <div
          className="flex projects-center justify-end items-center gap-2 text-right  mt-2 hover:text-primary hover:cursor-pointer hover:underline"
          onClick={handleProjectDetails}
        >
          See more <BsArrowUpRight />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
