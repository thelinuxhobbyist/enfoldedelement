import matter from 'gray-matter';
import type { BlogFrontmatter, BlogMeta, BlogPost } from '@/types/blog';

// Eagerly import all markdown files as raw strings (relative path to this file)
const rawPosts = import.meta.glob('../content/blog/**/*.md?raw', { eager: true, import: 'default' }) as Record<string, string>;

const pathToSlug = (path: string) => {
  const match = path.match(/content\/blog\/(.*)\.md$/);
  return match ? match[1] : path;
};

export function getAllPosts(): BlogPost[] {
  const entries = Object.entries(rawPosts);
  if (typeof window !== 'undefined') {
    // Light debug to help verify discovery in production
    console.info('[blog] discovered markdown files:', entries.length);
  }
  const posts: BlogPost[] = entries.map(([path, raw]) => {
    const { data, content } = matter(raw);
    const fm = data as BlogFrontmatter;
    return {
      slug: pathToSlug(path),
      content,
      frontmatter: fm,
    };
  });

  return posts
    .filter((p) => p.frontmatter?.title && p.frontmatter?.pubDate)
    .sort((a, b) => new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime());
}

export function getAllPostMeta(): BlogMeta[] {
  return getAllPosts().map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const entry = Object.entries(rawPosts).find(([path]) => path.endsWith(`content/blog/${slug}.md`));
  if (!entry) return undefined;
  const raw = entry[1];
  const { data, content } = matter(raw);
  return {
    slug,
    content,
    frontmatter: data as BlogFrontmatter,
  };
}
