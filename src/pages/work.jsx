import React, { useContext, useEffect, useRef, useState } from "react";
import projects from "../projects";
import ProjectCard from "@/components/projectCard";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDetails from "@/components/projectDetails";
import { CgArrowLongLeft } from "react-icons/cg";
import { MainContext } from "./_app";

const Work = () => {
  // const [projectDetails, setProjectDetails] = useState({});
  const { projectDetails, setProjectDetails } = useContext(MainContext);

  const { detailRef, isDetailComponentVisible, setIsDetailComponentVisible } =
    DetailComponentVisible(false);

  return (
    <AnimatePresence>
      <motion.article
        className="relative p-4 text-lg"
        key="page"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 10 }}
        ref={detailRef}
      >
        <header className="flex flex-col gap-2 my-6">
          <h1 className="text-4xl font-semibold text-secondary">Work</h1>
          <p>Projects I&#39;ve been working on</p>
        </header>
        <section>
          {projects
            .map((project) => (
              <ProjectCard
                project={project}
                key={project.id}
                setProjectDetails={setProjectDetails}
                setIsDetailComponentVisible={setIsDetailComponentVisible}
              />
            ))
            .reverse()}
        </section>
      </motion.article>

      {isDetailComponentVisible && (
        <motion.div
          className="fixed top-0 p-4 w-[615px] max-w-[615px] h-screen z-10 bg-light border-r-2 border-slate-500/20 overflow-hidden"
          key="detail"
          initial={{ opacity: 1, width: 0, height: "100vh" }}
          animate={{ opacity: 1, width: "615px", height: "100vh" }}
          exit={{ opacity: 1, width: 0, height: "100vh" }}
          role="container"
        >
          <div
            className="absolute top-2 right-2 w-full flex justify-end items-center gap-2 whitespace-nowrap cursor-pointer hover:underline"
            onClick={() => setIsDetailComponentVisible(false)}
          >
            <CgArrowLongLeft />
            Back to projects
          </div>
          <ProjectDetails project={projectDetails} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DetailComponentVisible = (initialVisible) => {
  const [isDetailComponentVisible, setIsDetailComponentVisible] =
    useState(initialVisible);

  const detailRef = useRef();
  const handleClickOutside = (e) => {
    if (detailRef.current && !detailRef.current.contains(e.target)) {
      setIsDetailComponentVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { detailRef, isDetailComponentVisible, setIsDetailComponentVisible };
};

export default Work;
