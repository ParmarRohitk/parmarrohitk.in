import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./Blog.module.css"; // Assuming you're using CSS Modules
const iconMap = {
  Programming: "/icons/code-bg.svg",
  Design: "/icons/design.svg",
  Essentials: "/icons/essentials.svg",
};

export default function Blog({ posts }) {
  return (
    <section className={styles.blogSection} id="blog">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Latest <span className={styles.highlight}>Posts</span>
          </h2>
          <p className={styles.subtitle}>
            Thoughts, tutorials, and updates from my dev journey.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
              <a
                className={styles.card}
                style={{
                  "--icon": `url(${
                    iconMap[post.category] || "/icons/code-bg.svg"
                  })`,
                }}
              >
                <div className={styles.category}>
                  {post.category || "General"}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>
                    {post.excerpt || "No excerpt available."}
                  </p>
                </div>
                <div className={styles.cardMeta}>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>🗨 {post.comments || 0} comments</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
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
