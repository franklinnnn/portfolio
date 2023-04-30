import { AnimatePresence, motion } from "framer-motion";
import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { MainContext } from "../_app";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clczis6234h0001ukhnlr6jmk/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      author {
        id
        name
        avatar {
          url
        }
      }
      tags
      content {
        html
      }
      coverPhoto {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  const { setActivePage } = useContext(MainContext);
  const router = useRouter();
  return (
    <AnimatePresence>
      <motion.article
        className="p-4 text-lg"
        key="post"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -10 }}
      >
        <section className="flex flex-col gap-2 my-6">
          <header>
            <h1 className="text-4xl font-semibold text-secondary">
              {post.title}
            </h1>
            <div className="w-full flex items-center gap-2 mb-4 text-sm">
              <h3 className="font-work text-base">{post.datePublished}</h3>
              {post.tags.map((item) => (
                <span
                  key={item}
                  className="px-1 bg-primary/40 rounded-sm font-work text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </header>
          <img src={post.coverPhoto.url} alt={post.title} />
        </section>
        <section
          dangerouslySetInnerHTML={{ __html: post.content.html }}
          className="flex flex-col gap-4 pb-8 text-base [&>p>a]:text-fuchsia-600"
        ></section>
        <footer
          className="w-full flex justify-end items-center gap-2 text-base whitespace-nowrap cursor-pointer hover:underline"
          onClick={() => router.back()}
        >
          <CgArrowLongLeft />
          Back to blog
        </footer>
      </motion.article>
    </AnimatePresence>
  );
}
