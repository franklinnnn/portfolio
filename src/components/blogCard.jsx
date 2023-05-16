import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { motion } from "framer-motion";

const BlogCard = ({ post }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex max-sm:flex-col gap-2 md:my-6 my-10 w-full md:h-48 hover:bg-slate-500/10"
    >
      <div className="md:w-3/5 max-sm:h-48 overflow-hidden rounded-sm">
        <div className="w-full h-full flex justify-center items-center ">
          {loading ? (
            <motion.span
              className="text-4xl text-primary"
              initial={{ rotate: 0 }}
              animate={{
                rotate: 360,
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              <CgSpinner />
            </motion.span>
          ) : (
            <img
              src={post.coverPhoto.url}
              alt={post.title}
              className="object-cover w-full h-full"
              onload={() => setLoading(false)}
            ></img>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between md:w-2/5">
        <div className="text-xl">
          <h2 className="font-semibold group-hover:text-primary">
            {post.title}
          </h2>
          <div className="flex items-center gap-1 text-sm font-work">
            <span className="">{post.datePublished}</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-1 bg-primary/40 rounded-sm font-work text-secondary text-xs mx-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: post.content.html.substring(0, 100) + "...",
          }}
          className="text-sm"
        ></p>
        <p className="flex items-center justify-start md:justify-end gap-2 text-right hover:text-primary hover:cursor-pointer hover:underline">
          Read more <BsArrowUpRight />
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
