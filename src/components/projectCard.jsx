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
    <section className="group flex gap-2 my-6 w-full h-48" key={project.title}>
      <a
        className="w-3/5 overflow-hidden rounded-sm"
        href={project.url}
        target="_blank"
      >
        <img
          src={project.img}
          alt={project.desc}
          className="object-cover w-full"
        />
      </a>
      <div className="flex flex-col gap-2 justify-between w-2/5">
        <a
          className="text-xl font-semibold group-hover:text-primary"
          href={project.url}
          target="_blank"
        >
          {project.title}
        </a>
        <p className="text-base">{project.desc}</p>
        <div
          className="flex projects-center justify-end items-center gap-2 text-right hover:text-primary hover:cursor-pointer hover:underline"
          onClick={handleProjectDetails}
        >
          See more <BsArrowUpRight />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
