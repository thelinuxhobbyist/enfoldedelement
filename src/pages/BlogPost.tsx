import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams, Navigate } from "react-router-dom";
import { getPostBySlug } from "@/lib/blog";
import { useMemo, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  const markdown = useMemo(() => (post ? post.content : ""), [post]);

  if (!post) return <Navigate to="/blog" replace />;
  useEffect(() => {
    if (!post) return;
    document.title = `${post.frontmatter.title} | Enfolded Media`;
    const el = document.querySelector('meta[name="description"]');
    if (el) {
      el.setAttribute('content', post.frontmatter.description || '');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = post.frontmatter.description || '';
      document.head.appendChild(meta);
    }
  }, [post]);

  const img = typeof post.frontmatter.image === 'string' ? post.frontmatter.image : post.frontmatter.image?.url;
  const alt = typeof post.frontmatter.image === 'string' ? post.frontmatter.title : post.frontmatter.image?.alt || post.frontmatter.title;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-stone max-w-3xl mx-auto dark:prose-invert">
          <header className="mb-6">
            <h1>{post.frontmatter.title}</h1>
            <p className="text-sm text-muted-foreground">
              {(() => {
                const t = new Date(String(post.frontmatter.pubDate ?? ''));
                const dateStr = isNaN(t.getTime()) ? '' : t.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
                return `${dateStr}${post.frontmatter.author ? (dateStr ? ' • ' : '') + post.frontmatter.author : ''}`;
              })()}
            </p>
          </header>
          {img && (
            <img src={img} alt={alt} loading="lazy" className="w-full rounded-xl border border-border" />
          )}
          <div className="mt-6 prose prose-stone dark:prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
