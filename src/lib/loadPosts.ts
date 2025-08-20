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
