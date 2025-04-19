import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <section className="blog">
      <h2>Latest Posts</h2>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`} legacyBehavior>
            <a>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/blog"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("content/blog", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      ...frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
