import matter from 'gray-matter';
import type { BlogFrontmatter, BlogMeta, BlogPost } from '@/types/blog';

// Eagerly import markdown files. Use Vite alias (@) and relative pattern, with `as: 'raw'` so content is a string.
const mdModules = import.meta.glob([
  '@/content/blog/**/*.md',
  '../content/blog/**/*.md',
  '/src/content/blog/**/*.md',
], { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

const rawPosts = { ...mdModules } as Record<string, string>;

const pathToSlug = (path: string) => {
  // Normalize and extract slug between content/blog/ and .md
  const cleaned = path.replace(/\?.*$/, '');
  const match = cleaned.match(/content\/blog\/(.*)\.md$/);
  return match ? match[1] : cleaned;
};

export function getAllPosts(): BlogPost[] {
  try {
    const entries = Object.entries(rawPosts);
    if (typeof window !== 'undefined') {
      // Light debug to help verify discovery in production
      console.info('[blog] discovered markdown files:', entries.length);
    }
    const posts: BlogPost[] = entries.flatMap(([path, raw]) => {
      try {
        const text = typeof raw === 'string' ? raw : String(raw ?? '');
        const { data, content } = matter(text);
        const fm = data as BlogFrontmatter;
        return [{
          slug: pathToSlug(path),
          content,
          frontmatter: fm,
        }];
      } catch (err) {
        console.error('[blog] Failed to parse markdown at', path, err);
        return [] as BlogPost[];
      }
    });

    const safeTime = (d: unknown) => {
      const t = d instanceof Date ? d.getTime() : new Date(String(d ?? '')).getTime();
      return isFinite(t) ? t : 0;
    };

    return posts
      .filter((p) => Boolean(p.frontmatter?.title))
      .sort((a, b) => safeTime(b.frontmatter.pubDate) - safeTime(a.frontmatter.pubDate));
  } catch (e) {
    console.error('[blog] getAllPosts error:', e);
    return [];
  }
}

export function getAllPostMeta(): BlogMeta[] {
  try {
    return getAllPosts().map(({ content, ...meta }) => meta);
  } catch (e) {
    console.error('[blog] getAllPostMeta error:', e);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const entry = Object.entries(rawPosts).find(([path]) => path.replace(/\?.*$/, '').endsWith(`content/blog/${slug}.md`));
    if (!entry) return undefined;
    const raw = entry[1];
    const text = typeof raw === 'string' ? raw : String(raw ?? '');
    const { data, content } = matter(text);
    return {
      slug,
      content,
      frontmatter: data as BlogFrontmatter,
    };
  } catch (e) {
    console.error('[blog] getPostBySlug error:', slug, e);
    return undefined;
  }
}

// Debug helper for visibility in production
export function getBlogDiscoveryDebug() {
  try {
    const entries = Object.keys(rawPosts);
    return { count: entries.length, keys: entries };
  } catch {
    return { count: 0, keys: [] as string[] };
  }
}
