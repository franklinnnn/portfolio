import React from "react";
import { FaCodepen, FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "../assets/profileImg.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <AnimatePresence>
      <motion.article
        className="p-4 text-lg"
        key="page"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 10 }}
      >
        <section className="flex flex-col gap-2 my-6">
          <header>
            <h1 className="text-4xl font-semibold text-secondary">
              Franklin Assa
            </h1>
          </header>
          <section className="flex flex-col gap-2 my-4">
            <p>
              Hello, I&#39;m Franklin. I&#39;m trying to be a web developer.
              Currently a nurse working in mental health.
            </p>
            <section className="flex gap-6 itmes-center">
              <div className="w-32 h-32 max-sm:w-24 max-sm:h-24">
                <img
                  src={profileImg.src}
                  alt="profile image"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex items-center">
                <motion.a
                  className="border-2 p-2 w-28 capitalize text-center border-slate-200 rounded-md hover:bg-primary hover:text-light duration-150 ease-in-out"
                  href="https://drive.google.com/file/d/1D1ux5BCXo_yL9A9dzjZ1F6clMbiTrhDm/view"
                  target="_blank"
                >
                  resume
                </motion.a>
              </div>
            </section>
            <p>
              I have been working in the health care field for 10 years, and I
              am ready for a change. I am a growth-focused individual, versatile
              and quick learner willing to embrace new challenges and eager to
              learn more and grow as a web developer. I am passionate about
              developing, implementing, and adopting new technologies to
              maximize software quality and produce innovative web applications.
            </p>
          </section>
          <section className="flex gap-6 max-sm:flex-col">
            <div className="flex gap-2 justify-between items-center max-sm:w-1/2 border-2 border-slate-200 px-2 py-1 rounded-md hover:bg-primary hover:text-light duration-150 ease-in-out">
              <a
                className="flex gap-2 items-center font-work  w-full justify-between"
                href="https://www.linkedin.com/in/franklin-assa/"
                target="_blank"
              >
                <span className="flex gap-2">
                  <FaLinkedinIn className="text-2xl" /> LinkedIn
                </span>
                <BsArrowUpRight className="text-sm ml-4" />
              </a>{" "}
            </div>
            <div className="flex gap-2 justify-between items-center max-sm:w-1/2 border-2 border-slate-200 px-2 py-1 rounded-md hover:bg-primary hover:text-light duration-150 ease-in-out">
              <a
                className="flex gap-2 items-center font-work  w-full justify-between"
                href="https://github.com/franklinnnn"
                target="_blank"
              >
                <span className="flex gap-2">
                  <FaGithub className="text-2xl" /> GitHub
                </span>
                <BsArrowUpRight className="text-sm ml-4" />
              </a>
            </div>
            <div className="flex gap-2 justify-between items-center max-sm:w-1/2 border-2 border-slate-200 px-2 py-1 rounded-md hover:bg-primary hover:text-light duration-150 ease-in-out">
              <a
                className="flex gap-2 items-center font-work w-full justify-between"
                href="https://codepen.io/franklinnnn/"
                target="_blank"
              >
                <span className="flex gap-2">
                  <FaCodepen className="text-2xl" /> CodePen
                </span>
                <BsArrowUpRight className="text-sm ml-4" />
              </a>{" "}
            </div>
          </section>
        </section>

        <section className="flex flex-col gap-4 my-6 pt-6 border-t-2 border-slate-200">
          <header>
            <h2 className="text-xl font-semibold">Education</h2>
          </header>
          <div>
            <p className="flex max-sm:flex-col items-start md:justify-between gap-2">
              <span className="font-semibold">
                California State University, San Bernardino
              </span>{" "}
              <span className="text-base font-work">Aug. 2022</span>
            </p>
            <p className="text-base">
              As a student I developed a dynamic and interactive web
              application. Additionally, I analyzed and processed different
              datasets using various algorithms.
            </p>
          </div>
          <div>
            <p className="flex  max-sm:flex-col items-start md:justify-between gap-2">
              <span className="font-semibold">
                San Bernardino Valley College
              </span>{" "}
              <span className="text-base font-work">Dec. 2009</span>
            </p>
            <p className="text-base">
              As a student I observed and communicated with patients and
              provided feedback to medical professionals. i also administered
              medications and documented daily activities.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4 my-6 pt-6 border-t-2 border-slate-200">
          <header>
            <h2 className="text-xl font-semibold">Experience</h2>
          </header>
          <div>
            <p className="flex flex-col">
              <span className="font-semibold">
                California Department of State Hospitals, Metropolitan
              </span>{" "}
              <span className="text-base font-work">2015-present</span>
            </p>
            <p className="text-base">
              My current employment seems me use interpersonal skills to
              communicate with patients in a clinical mental health setting. I
              actively engage with team members to identify and implement
              creative solutions for patients.
            </p>
          </div>
          <div>
            <p className="flex flex-col">
              <span className="font-semibold">
                California Department of Corrections & Rehabilitation
              </span>{" "}
              <span className="text-base font-work">2013-2014</span>
            </p>
            <p className="text-base">
              In my time with the Department of Corrections & Rehabilitation I
              effectively observed and communicated with over 100 inmates daily,
              from administering medications to documenting behaviors. I also
              organized and scheduled to staff units.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4 my-6 pt-6 border-t-2 border-slate-200">
          <header>
            <h2 className="text-xl font-semibold">Certification</h2>
          </header>
          <div>
            <p className="flex flex-col">
              <span className="font-semibold">
                Front-End Engineer Career Path
              </span>{" "}
              <span className="text-base font-work">codecademy Feb. 2023</span>
            </p>
            <p className="text-base">
              I created applications that implemented React, Redux, and SQL.
              Some projects from this course can be seen in my works page.
            </p>
          </div>
        </section>
      </motion.article>
    </AnimatePresence>
  );
};

export default About;
