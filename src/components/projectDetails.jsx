import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const ProjectDetails = ({ project }) => {
  return (
    <article className="w-full max-sm:w-screen h-screen p-6 pb-10 max-sm:mt-4 overflow-scroll [&::-webkit-scrollbar]:hidden">
      <header>
        <a
          href={project.url}
          target="_blank"
          className="flex items-center gap-2 text-3xl text-secondary font-semibold hover:underline whitespace-nowrap"
        >
          {project.title}{" "}
          <span className="text-2xl">
            <BiLinkExternal />
          </span>
        </a>
        <p className="mt-2 mb-4">{project.desc}</p>
      </header>

      <img
        src={project.img}
        alt=""
        className="aspect-[16/9] object-cover object-top"
      />

      <section className="w-full my-4">
        <div className="w-full flex gap-2 my-4 text-sm" role="technologies">
          {project.technologies.map((item) => (
            <span
              key={item}
              className="px-1 bg-primary/40 rounded-sm font-work text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
        <h2 className="text-secondary text-2xl font-semibold">About</h2>
        <p>{project.about}</p>
        <div
          className="flex flex-col gap-4 my-6 text-sm text-secondary font-semibold whitespace-pre-wrap"
          role="links container"
        >
          <p className="flex gap-4 max-sm:flex-col max-sm:gap-1">
            Website:
            <a
              href={project.url}
              target="_blank"
              className="underline hover:text-primary"
            >
              {project.url}
            </a>
          </p>
          <p className="flex gap-4 max-sm:flex-col max-sm:gap-1">
            Repository:
            <a
              href={project.repository}
              target="_blank"
              className="underline hover:text-primary"
            >
              {project.repository}
            </a>
          </p>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetails;
