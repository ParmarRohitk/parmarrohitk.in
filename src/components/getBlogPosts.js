import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts(limit = null) {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join(blogDir, filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      ...frontmatter,
    };
  });

  // Sort posts by date (latest first), assuming frontmatter.date is ISO or parsable
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // If limit is provided, slice the array
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
}
