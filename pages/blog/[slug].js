import { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import { getBlogPosts } from "../../src/components/getBlogPosts"; // Import your function to fetch blog posts

const author = {
  name: "Parmar Rohit K.",
  bio: "A passionate web developer and blogger. Loves building with Next.js.",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
    },
    {
      platform: "GitHub",
      url: "https://github.com/johndoe",
    },
  ],
};

export default function PostPage({ frontmatter, mdxSource, latestPosts }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-position",
        `${scrollPos}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="blogbody">
      <article className="blog-container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link> <span>/</span>{" "}
          <Link href="/blog">Blog</Link> <span>/</span>{" "}
          <span className="current">{frontmatter.title}</span>
        </nav>

        <h1 className="title">{frontmatter.title}</h1>
        <p className="date">{frontmatter.date}</p>

        {frontmatter.image && (
          <div className="featured-image mb-5">
            <img
              src={frontmatter.image}
              alt={frontmatter.title}
              width="auto"
              height="400"
            />
          </div>
        )}

        <div className="content">
          <MDXRemote {...mdxSource} />
        </div>

        {/* Author Info */}
        <div className="author-info">
          <h2>About the Author</h2>
          <div className="author-details">
            <p className="author-name">
              <Link href="/">{author.name}</Link>
            </p>
            <p className="author-bio">{author.bio}</p>
            {/* <div className="author-links">
              {author.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>{link.platform}</p>
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Latest Blog Posts</h2>
        <ul>
          {latestPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a>
                  <p className="sidebar-post-title">{post.title}</p>
                  <p className="sidebar-post-date">{post.date}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Add styles */}
      <style jsx global>{`
        .blogbody {
          margin: 0;
          padding: 0;
          font-family: "Inter", sans-serif;
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #f0288d 0%,
            #4f3bfa 50%,
            #0ea5e9 100%
          );
          z-index: 0;
          opacity: 0.95;
          overflow-y: auto;
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
        }

        .blog-container {
          max-width: 800px;
          margin: 4rem auto;
          padding: 0 1.25rem;
          color: #e5e7eb;
          line-height: 1.7;
          position: relative;
          flex: 1 1 100%;
        }

        .author-info {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
        }

        .author-info h2 {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .author-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: orange;
        }

        .author-bio {
          font-size: 1.1rem;
          color: yellow;
          margin-top: 0.5rem;
        }

        .author-links {
          margin-top: 1rem;
        }

        .author-links a {
          color: black;
          font-size: 1.1rem;
          margin-right: 1rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .author-links a:hover {
          color: #0ea5e9;
        }

        .sidebar {
          width: 100%;
          max-width: 350px;
          position: sticky;
          top: 0;
          padding: 2rem;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 10px;
          color: white;
          margin-top: 2rem;
          margin-left: 20px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
        }

        .sidebar h2 {
          font-size: 1.5rem;
          color: #38bdf8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .sidebar ul {
          list-style-type: none;
          padding: 0;
        }

        .sidebar li {
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .sidebar-post-title {
          font-size: 1.125rem;
          font-weight: bold;
          color: #38bdf8;
          text-transform: capitalize;
          transition: color 0.3s ease;
        }

        .sidebar-post-title:hover {
          color: #0ea5e9;
          cursor: pointer;
          transform: translateX(5px);
        }

        .sidebar-post-date {
          font-size: 1rem;
          color: #9ca3af;
        }

        .breadcrumb {
          font-size: 1rem;
          color: #e5e7eb;
          margin-bottom: 1rem;
          display: flex;
          gap: 0.5rem;
        }

        .breadcrumb a {
          color: #38bdf8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
          color: #0ea5e9;
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-top: 1rem;
          color: #ffffff;
          text-transform: capitalize;
        }

        .date {
          color: #b0c7d7;
          margin-bottom: 1.5rem;
        }

        .content {
          margin-top: 2rem;
          font-size: 1.1rem;
        }

        .featured-image {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .blogbody {
            flex-direction: column;
            padding: 2rem;
          }

          .blog-container {
            max-width: 100%;
            margin: 0;
          }

          .sidebar {
            max-width: 100%;
            margin-left: 0;
            margin-top: 2rem;
            position: static; /* Position fixed in the flow below the blog content */
          }

          .sidebar h2 {
            font-size: 1.3rem;
          }

          .sidebar-post-title {
            font-size: 1rem;
          }

          .title {
            font-size: 2rem;
          }

          .content {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/blog"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/blog", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  // Fetch the latest 5 blog posts
  const latestPosts = getBlogPosts(5); // Get the latest 5 posts

  return {
    props: {
      frontmatter,
      mdxSource,
      latestPosts, // Pass the latest posts to the page
    },
  };
}
