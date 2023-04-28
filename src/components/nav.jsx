import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { MainContext } from "@/pages/_app";

const Nav = () => {
  const { activePage, setActivePage } = useContext(MainContext);
  return (
    <AnimatePresence>
      <motion.div
        className="m-2 flex flex-col gap-6"
        key="navigation"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 10 }}
      >
        <Link href="/" onClick={() => setActivePage("home")}>
          <div className="flex justify-center items-center my-6">
            <span className=" place-content-center p-4 rounded-full text-3xl text-light font-work bg-primary bg-gradient-to-br from-primary to-secondary">
              FA
            </span>
          </div>
        </Link>
        <ul className="flex flex-col text-4xl py-2 border-y-2 border-slate-500/10">
          <Link href="/" onClick={() => setActivePage("home")}>
            <motion.li
              className={`px-2 py-1 my-2 hover:text-secondary border-l-4 duration-150 ease-in-out ${
                activePage === "home"
                  ? " border-primary text-secondary"
                  : "border-transparent"
              }`}
            >
              home
            </motion.li>
          </Link>
          <Link href="/work" onClick={() => setActivePage("work")}>
            <motion.li
              className={`px-2 py-1 my-2 hover:text-secondary border-l-4 duration-150 ease-in-out ${
                activePage === "work"
                  ? " border-primary text-secondary"
                  : "border-transparent"
              }`}
            >
              work
            </motion.li>
          </Link>
          <Link href="/about" onClick={() => setActivePage("about")}>
            <motion.li
              className={`px-2 py-1 my-2 hover:text-secondary border-l-4 duration-150 ease-in-out ${
                activePage === "about"
                  ? " border-primary text-secondary"
                  : "border-transparent"
              }`}
            >
              about
            </motion.li>
          </Link>
          <Link href="/blog" onClick={() => setActivePage("blog")}>
            <motion.li
              className={`px-2 py-1 my-2 hover:text-secondary border-l-4 duration-150 ease-in-out ${
                activePage === "blog"
                  ? " border-primary text-secondary"
                  : "border-transparent"
              }`}
            >
              blog
            </motion.li>
          </Link>
        </ul>

        {/* <div className="flex text-2xl gap-2">
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaTwitterSquare />
          </span>
          <span>
            <FaFacebookSquare />
          </span>
        </div> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default Nav;
