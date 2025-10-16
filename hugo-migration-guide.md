# Transition from React to Hugo

This document outlines how to transition from your React site to Hugo while keeping the same design and components.

## Why Hugo?

Hugo offers several advantages:

- Much faster build times than Astro
- Simple, straightforward templating system
- Great performance with minimal JavaScript
- Easy to maintain and extend

## Directory Structure

```
hugo-site/
├── archetypes/
├── assets/
│   ├── css/
│   │   └── main.css       # Your TailwindCSS file
│   ├── js/
│   │   └── main.js        # Site JavaScript
│   └── images/            # Site images that need processing
├── content/
│   └── blog/              # Your blog posts in Markdown
├── layouts/
│   ├── _default/          # Default templates
│   │   ├── baseof.html    # Base template with <head>, <header>, <footer>
│   │   ├── list.html      # Template for section lists
│   │   └── single.html    # Template for single pages
│   ├── partials/          # Reusable template parts
│   │   ├── navbar.html    # Navigation bar
│   │   ├── footer.html    # Site footer
│   │   └── card.html      # Card component for blog/packages
│   ├── shortcodes/        # Custom shortcodes for markdown
│   ├── blog/              # Blog-specific layouts
│   └── index.html         # Home page template
├── static/
│   ├── assets/            # Static assets like blog images
│   └── images/            # Static images like logo
├── themes/
│   └── enfoldedelement/   # Your theme
├── hugo.yaml              # Hugo configuration
├── package.json           # Node.js dependencies (for TailwindCSS)
├── postcss.config.js      # PostCSS configuration
└── tailwind.config.js     # TailwindCSS configuration
```

## Migration Steps

1. **Set up Hugo**

   - Create a new Hugo site
   - Configure hugo.yaml
   - Set up TailwindCSS

2. **Migrate Templates**

   - Create base templates in layouts/\_default/
   - Create partials for navbar, footer, etc.
   - Adapt your React components to Hugo HTML templates

3. **Migrate Content**

   - Move blog posts to content/blog/
   - Update frontmatter format (change 'pubDate' to 'date')

4. **Migrate Assets**

   - Copy images to static/assets/
   - Set up CSS in assets/css/
   - Set up JS in assets/js/

5. **Build and Deploy**
   - Run `hugo server` to test locally
   - Run `hugo` to build the site
   - Deploy to Cloudflare Pages

## Local Development

To run the site locally:

```bash
# Install dependencies
npm install

# Run Hugo server
hugo server -D
```

Visit http://localhost:1313/ in your browser.

## Deployment

Hugo sites can be easily deployed to Cloudflare Pages, Netlify, or Vercel.

For Cloudflare Pages, set the build command to `hugo --minify` and the output directory to `public`.

## References

- [Hugo Documentation](https://gohugo.io/documentation/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Hugo with TailwindCSS Guide](https://www.hugotutorial.com/posts/2022-01-01-hugo-and-tailwindcss-3/)
