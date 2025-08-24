import Link from "next/link";

const Blog = ({ posts }) => {
  return (
    <section className="blog post main-section flex-column-mobile" id="blog">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
      </div>
      {JSON.stringify(posts)}
    </section>
  );
};

export default Blog;
