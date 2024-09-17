import profileImg from "../assets/profileImg.jpg";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { MainContext } from "./_app";
import { featuredWorks } from "../projects";
import ProjectCard from "@/components/projectCard";
import ProjectDetails from "@/components/projectDetails";

const Home = () => {
  const { setActivePage, projectDetails, setProjectDetails } =
    useContext(MainContext);

  const { detailRef, isDetailComponentVisible, setIsDetailComponentVisible } =
    DetailComponentVisible(false);
  return (
    <AnimatePresence>
      <motion.article
        className="p-4 text-lg"
        key="home"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 10 }}
        ref={detailRef}
      >
        <section className="flex flex-col gap-2 my-6">
          <h1 className="text-4xl font-semibold text-secondary">
            Franklin Assa
          </h1>
          <div className="flex max-sm:flex-col gap-4">
            <div className="w-32 h-32 ">
              <img
                src={profileImg.src}
                alt="my profile image"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="sm:w-4/5">
              <p className="mb-2">
                Hello, I&#39;m Franklin. I&#39;m trying to be a web developer.
                Currently a nurse working in mental health.
              </p>
              <Link
                href="/about"
                className="text-xl flex gap-2 items-center font-semibold hover:underline"
                onClick={() => setActivePage("about")}
              >
                View profile <CgArrowLongRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <div>
            {featuredWorks
              .map((project) => (
                <ProjectCard
                  project={project}
                  key={project.id}
                  setProjectDetails={setProjectDetails}
                  setIsDetailComponentVisible={setIsDetailComponentVisible}
                />
              ))
              .reverse()
              .splice(0, 3)}
          </div>
          <Link
            href="/work"
            className="text-xl flex gap-2 items-center font-semibold hover:underline"
            onClick={() => setActivePage("work")}
          >
            All projects <CgArrowLongRight className="text-2xl" />
          </Link>
        </section>
      </motion.article>

      {isDetailComponentVisible && (
        <motion.div
          className="fixed top-0 bottom-0 md:p-4 md:max-w-[615px]  z-10 bg-light border-r-2 border-slate-500/20 overflow-hidden"
          key="detail"
          initial={{ opacity: 1, width: 0, height: "100vh" }}
          animate={{ opacity: 1, width: "615px", height: "100vh" }}
          exit={{ opacity: 1, width: 0, height: "100vh" }}
          role="container"
        >
          <motion.div
            className="fixed md:absolute top-2 right-2 w-full flex justify-end items-center gap-2 bg-light whitespace-nowrap cursor-pointer hover:underline"
            onClick={() => setIsDetailComponentVisible(false)}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "615px" }}
            exit={{ opacity: 0, width: 0 }}
          >
            <CgArrowLongLeft />
            Back to projects
          </motion.div>
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

export default Home;
