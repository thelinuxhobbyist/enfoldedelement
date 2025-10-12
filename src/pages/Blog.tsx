import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { getAllPostMeta, getBlogDiscoveryDebug } from "@/lib/blog";
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
            <div className="text-muted-foreground space-y-2">
              <p>No posts yet.</p>
              {(() => {
                const d = getBlogDiscoveryDebug();
                return (
                  <pre className="text-xs whitespace-pre-wrap break-words bg-muted/40 p-3 rounded-md border border-border">
                    {`debug: discovered=${d.count}\n` + d.keys.map((k) => `- ${k}`).join('\n')}
                  </pre>
                );
              })()}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const rawImg = typeof post.frontmatter.image === 'string' ? post.frontmatter.image : post.frontmatter.image?.url;
                const img = rawImg && rawImg.startsWith('/assets/blog-images') ? rawImg : undefined;
                const alt = typeof post.frontmatter.image === 'string' ? post.frontmatter.title : post.frontmatter.image?.alt || post.frontmatter.title;
                return (
                  <article key={post.slug} className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                    {img && (
                      <img
                        src={img}
                        alt={alt}
                        loading="lazy"
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement;
                          t.onerror = null;
                          t.src = '/placeholder.svg';
                        }}
                      />
                    )}
                    <div className="p-6 space-y-3">
                      <h2 className="text-2xl font-bold">
                        <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {(() => {
                          const t = new Date(String(post.frontmatter.pubDate ?? ''));
                          return isNaN(t.getTime()) ? '' : t.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
                        })()}
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
