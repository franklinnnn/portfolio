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
      className="group flex gap-2 my-6 w-full h-48"
    >
      <div className="w-3/5 overflow-hidden rounded-sm">
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
              className="object-cover w-full"
              onload={() => setLoading(false)}
            ></img>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-between w-2/5">
        <div className="text-xl">
          <h2 className="font-semibold group-hover:text-primary">
            {post.title}
          </h2>
          <h3 className="text-sm font-work">
            <span className="mr-1">{post.datePublished}</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-1 bg-primary/40 rounded-sm font-work text-secondary text-xs mx-1"
              >
                {tag}
              </span>
            ))}
          </h3>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: post.content.html.substring(0, 100) + "...",
          }}
          className="text-sm"
        ></p>
        <p className="flex items-center justify-end gap-2 text-right hover:text-primary hover:cursor-pointer hover:underline">
          Read more <BsArrowUpRight />
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
