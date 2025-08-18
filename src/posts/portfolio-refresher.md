---
title: Rebuilding My Portfolio and How the Blog Works Under the Hood
date: 2025-08-11
excerpt: A quick tour of what’s changed in my portfolio and how I’m using Markdown + front-matter to power this blog section.
---

# Rebuilding My Portfolio and How the Blog Works Under the Hood

_Published: August 11, 2025_  
_By: Jordan Smith_

> If your portfolio still reflects who you were 4 years ago, it’s time for a rebuild.

## Why I’m Refreshing Now

Four years is a long time in dev years and after my recent layoff, I really needed to get this refreshed ASAP. In my bag of skills I've added **TypeScript**, **Python**, leaned into **TanStack Table/Query**, done more with **maps & geocoding**, explored **Power Platform** for fast internal tools, and scratched the surface on at least a dozen more coding languages. My old portfolio didn’t reflect that growth or how I think about delivery speed, design, and maintainability now.

## The Blog Format (Markdown + Front-Matter)

Each post lives as a `.md` file with YAML-ish front-matter like this:

````md
---
title: My Example Post
date: 2025-08-11
excerpt: This is a small example with code blocks.
---

# My Example Post

_Published: August 11, 2025_  
_By: Jordan Smith_

Here’s some example code:

```tsx
export function Hello() {
  return <span>Hello!</span>;
}
```
````

The front-matter gives me metadata for rendering cards, sorting, and permalinks.

## Loading the Markdown files

This is how I load, sort, and number posts. It parses front-matter, extracts the body, sorts by date (newest first), and gives the **newest the highest number** in the modal header:

```ts
import fm from 'front-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  number: number;
};

type Attrs = {
  title?: string;
  date?: string;
  excerpt?: string;
};

export function loadPosts(): Post[] {
  const files = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

  const posts: Post[] = Object.entries(files).map(([path, raw]) => {
    const { attributes, body } = fm<Attrs>(raw as string);
    const slug = path.split('/').pop()!.replace('.md', '');
    const title = attributes.title ?? slug;
    const date = attributes.date ?? '';
    const excerpt =
      attributes.excerpt ?? body.trim().split('\n\n')[0].slice(0, 180) + '…';

    return {
      slug,
      title,
      date,
      excerpt,
      content: body,
      number: 0,
    };
  });

  posts.sort((a, b) => Date.parse(b.date || '0') - Date.parse(a.date || '0'));

  return posts.map((post, i) => ({
    ...post,
    number: posts.length - i,
  }));
}
```

## Rendering Markdown with Code Highlighting

For display, I’m using react-markdown with remark-gfm and a highlighter. Here's a stripped down version of how I'm using it:

```ts
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

type PostProps = {
  content: string;
};

export default function PostBody({ content }: PostProps) {
  return (
    <article className='prose prose-invert max-w-none'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
```
