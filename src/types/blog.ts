export type BlogFrontmatter = {
  title: string;
  description: string;
  pubDate: string | Date;
  author?: string;
  image?: { url: string; alt?: string } | string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  content: string;
  frontmatter: BlogFrontmatter;
};

export type BlogMeta = Omit<BlogPost, 'content'>;
