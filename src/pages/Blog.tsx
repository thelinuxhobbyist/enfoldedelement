import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { getAllPostMeta } from "@/lib/blog";
import { useEffect } from "react";

const Blog = () => {
  const posts = getAllPostMeta();
  useEffect(() => {
    document.title = "Blog | Enfolded Media – Design, Development & Digital Creativity";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-secondary/30 py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Design, development, and digital creativity from Enfolded Media.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const img = typeof post.frontmatter.image === 'string' ? post.frontmatter.image : post.frontmatter.image?.url;
                const alt = typeof post.frontmatter.image === 'string' ? post.frontmatter.title : post.frontmatter.image?.alt || post.frontmatter.title;
                return (
                  <article key={post.slug} className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                    {img && (
                      <img src={img} alt={alt} loading="lazy" className="w-full h-48 object-cover" />
                    )}
                    <div className="p-6 space-y-3">
                      <h2 className="text-2xl font-bold">
                        <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {new Date(post.frontmatter.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p className="text-muted-foreground line-clamp-3">{post.frontmatter.description}</p>
                      <div>
                        <Link to={`/blog/${post.slug}`} className="text-primary font-medium">Read more →</Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
