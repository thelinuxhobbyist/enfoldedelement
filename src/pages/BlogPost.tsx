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

  const markdown = useMemo(() => {
    if (!post) return '';
    let md = post.content || '';
    const title = String(post.frontmatter.title || '').trim();
    // If the markdown starts with an H1 that matches the frontmatter title, remove it
    // Also defensively strip a leading H1 if present to avoid duplicate headings
    try {
      const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (title) {
        const re = new RegExp('^\\s*#\\s+' + escapeRegExp(title) + '\\s*\\n+', 'i');
        if (re.test(md)) md = md.replace(re, '');
      }
      // Fallback: strip any single leading H1 line
      md = md.replace(/^\s*#\s+.*\n+/, '');
    } catch (e) {
      // If anything goes wrong, fall back to the raw content
      // eslint-disable-next-line no-console
      console.warn('[blog] failed to sanitize markdown heading', e);
    }
    return md;
  }, [post]);

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

  const rawImg = typeof post.frontmatter.image === 'string' ? post.frontmatter.image : post.frontmatter.image?.url;
  const img = rawImg && (rawImg.startsWith('/assets/blog-images') || rawImg.startsWith('/assets/blog-images-v2')) ? rawImg : undefined;
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
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="w-full rounded-xl border border-border"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.onerror = null;
                t.src = '/placeholder.svg';
              }}
            />
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
