import React, { useEffect, useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "@/components/blogCard";
import { AnimatePresence, motion } from "framer-motion";

const graphcms = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_CMS_ENDPOINT
);

const QUERY = gql`
  {
    posts(orderBy: datePublished_DESC) {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      tags
      coverPhoto {
        url
      }
      createdAt
    }
  }
`;

export const getPosts = async () => {
  const data = await graphcms.request(QUERY);
  return data.posts;
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts().then((res) => {
      setPosts(res);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
    setLoading(false);
  }, []);

  // const filteredPosts = posts.filter((post) => post.tags.includes(filter));

  // if (filter === "") {
  //   setPosts(posts);
  // } else {
  //   setPosts(filteredPosts);
  // }

  return (
    <AnimatePresence>
      <motion.article
        className="p-4 text-lg"
        key="blog"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: 10 }}
      >
        <section className="flex flex-col gap-2 my-6">
          <header>
            <h1 className="text-4xl font-semibold text-secondary">Blog</h1>
          </header>
          <section>
            {/* {filter ? (
                <div>
                  <div>
                    posts tagged <span>{filter}</span>
                  </div>
                  <div>
                    <span>all posts</span>
                  </div>
                </div>
              ) : null} */}
            {posts.map((post) => (
              <>
                {!loading ? (
                  <BlogCard post={post} key={post.id} />
                ) : (
                  <div>loading...</div>
                )}
              </>
            ))}
          </section>
        </section>
      </motion.article>
    </AnimatePresence>
  );
};

export default Blog;
