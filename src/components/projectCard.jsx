import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ProjectDetails from "./projectDetails";
import { AnimatePresence, motion } from "framer-motion";
import { CgArrowLongLeft } from "react-icons/cg";

const ProjectCard = ({
  project,
  setProjectDetails,
  setIsDetailComponentVisible,
}) => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const handleProjectDetails = () => {
    setProjectDetails(project);
    setShowProjectDetails(true);
  };

  return (
    <section
      className="group flex max-sm:flex-col gap-2 md:my-6 my-8 w-full md:h-48 hover:bg-slate-500/10 transition"
      key={project.title}
    >
      <a
        className="md:w-3/5 overflow-hidden rounded-sm h-48"
        href={project.url}
        target="_blank"
      >
        <Image
          src={project.img}
          alt={project.desc}
          width={356}
          height={192}
          className="object-cover w-full h-full p-1 group-hover:p-0 transition"
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

      <Dialog
        open={showProjectDetails}
        onClose={() => setShowProjectDetails(false)}
      >
        <div className="fixed inset-0 bg-slate-500/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Transition
            as={Fragment}
            show={showProjectDetails}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel>
              <div
                className="md:ml-24 md:w-[625px] h-screen z-10 bg-light border-r-2 border-slate-500/20 overflow-hidden"
                // initial={{ opacity: 1, width: 0, height: "100vh" }}
                // animate={{ opacity: 1, width: "615px", height: "100vh" }}
                // exit={{ opacity: 1, width: 0, height: "100vh" }}
                // role="container"
              >
                <div
                  className="w-full flex justify-end items-center gap-2 py-1 px-2 bg-light whitespace-nowrap cursor-pointer hover:underline"
                  onClick={() => setShowProjectDetails(false)}
                  // initial={{ opacity: 0, width: 0 }}
                  // animate={{ opacity: 1, width: "615px" }}
                  // exit={{ opacity: 0, width: 0 }}
                >
                  <CgArrowLongLeft />
                  Back to projects
                </div>
                <ProjectDetails project={project} />
              </div>
            </Dialog.Panel>
          </Transition>
        </div>
      </Dialog>
    </section>
  );
};

export default ProjectCard;
