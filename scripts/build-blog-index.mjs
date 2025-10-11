#!/usr/bin/env node
import { readdir, readFile, writeFile, stat, mkdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const BLOG_DIR = path.join(ROOT, 'src', 'content', 'blog');
const OUT_DIR = path.join(ROOT, 'src', 'content');
const OUT_FILE = path.join(OUT_DIR, 'blog-index.json');

async function listMarkdownFiles(dir) {
  const entries = await readdir(dir);
  const files = [];
  for (const name of entries) {
    const full = path.join(dir, name);
    const s = await stat(full);
    if (s.isDirectory()) {
      files.push(...(await listMarkdownFiles(full)));
    } else if (name.toLowerCase().endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

function toSlug(file) {
  const rel = path.relative(BLOG_DIR, file).replace(/\\/g, '/');
  return rel.replace(/\.md$/, '');
}

(async () => {
  try {
    const files = await listMarkdownFiles(BLOG_DIR);
    const posts = [];
    for (const f of files) {
      const raw = await readFile(f, 'utf8');
      const { data, content } = matter(raw);
      posts.push({
        slug: toSlug(f),
        content,
        frontmatter: data,
      });
    }
    await mkdir(OUT_DIR, { recursive: true });
    const json = JSON.stringify(posts, null, 2);
    await writeFile(OUT_FILE, json, 'utf8');
    console.info(`[blog-build] Wrote ${posts.length} posts to`, OUT_FILE);
  } catch (err) {
    console.error('[blog-build] Failed:', err);
    process.exit(1);
  }
})();
