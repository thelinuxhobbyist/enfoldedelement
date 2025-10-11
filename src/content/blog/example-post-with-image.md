---
title: "Example Post With Image"
description: "Shows how to reference images stored under public/assets/blog-images"
pubDate: 2025-10-11
author: "Team Enfolded"
image:
  url: "/assets/blog-images/example-hero.jpg"
  alt: "Example hero image"
tags: ["Guide", "Images"]
---

This post demonstrates how to reference images from `public/assets/blog-images`.

Frontmatter hero image above is used on the list card and post header.

Inline image in markdown:

![A diagram referenced from assets](/assets/blog-images/example-diagram.png)

If the files don’t exist yet, add them to:

- public/assets/blog-images/example-hero.jpg
- public/assets/blog-images/example-diagram.png

Commit and push; the build will include them automatically.
