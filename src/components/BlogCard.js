import Link from "next/link";

const BlogCard = ({ posts }) => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Posts
            </span>
          </span>
        </h3>
      </div>

      <div className="latestposts flex-column-mobile">
        {posts.map((post, index) => (
          <div
            className="animated-layer fade-in-right-animation fadeInUp wow"
            key={post.slug || index}
          >
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a>
                <span className="img-holder">
                  <img src={post.image} alt={post.title} />
                </span>
                <div className="content">
                  <span className="category">{post.category}</span>
                  <span className="title">{post.title}</span>
                  <p>{post.excerpt}</p>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-calendar" />
                      <span>{post.date}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-comments" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
