import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadPosts, type Post } from "../../lib/loadPosts";
import rehypeHighlight from "rehype-highlight";

export default function BlogPage() {
  const posts = loadPosts();
  const [activePost, setActivePost] = useState<Post | null>(null);


  useEffect(() => {
    if (!activePost) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [activePost]);

 
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActivePost(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="blog" className="relative min-h-screen mx-6 sm:mx-20 scroll-mt-16">
      <h2 className="mb-4 text-4xl font-bold text-white">Blog</h2>
      <p className="mb-12 text-gray-300">
        Sharing ideas, lessons, and thoughts on coding & life.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
<article
  key={post.slug}
  className="flex flex-col h-full p-6 transition border bg-white/10 backdrop-blur-md border-white/20 rounded-xl"
>
  <div className="flex-grow">
    <h3 className="text-xl font-semibold text-gray-100">{post.title}</h3>
    <p className="mt-1 text-sm text-gray-400">
      {new Date(post.date).toLocaleDateString()}
    </p>
    <p className="mt-3 text-gray-300">{post.excerpt}</p>
  </div>

  <button
    onClick={() => setActivePost(post)}
    className="inline-flex items-center gap-1 mt-4 font-medium transition text-primary hover:text-amber-700 hover:cursor-pointer"
  >
    Read more →
  </button>
</article>
        ))}
      </div>

  
      <a
        href="#top"
        className="fixed z-40 p-3 text-black transition rounded-full shadow-lg bottom-6 right-6 bg-primary hover:bg-amber-700"
        aria-label="Back to top"
      >
        ↑
      </a>

{activePost && (
  <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
 
    <button
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={() => setActivePost(null)}
      aria-label="Close article"
    />


    <div className="relative flex items-center justify-center p-4 h-dvh sm:p-6">

      <div
        className="
          relative w-full max-w-4xl pointer-events-auto
          bg-black/60 border border-white/20 backdrop-blur-xl
          rounded-2xl shadow-2xl
          max-h-[90svh] flex flex-col
        "
      >

        <div className="sticky top-0 z-10 flex-none bg-black/60 backdrop-blur-xl rounded-t-2xl">
          <div className="flex items-start justify-between gap-6 px-6 py-4">
            <div>
              <h3 className="text-3xl font-bold text-white">Blog Post #{activePost.number}</h3>
            </div>
            <button onClick={() => setActivePost(null)} className="self-center px-4 py-2 btn-primary ">
              Back
            </button>
          </div>
          <hr className="border-white/10" />
        </div>

       
        <div
          className="flex-1 px-6 py-6 pb-10 overflow-y-auto prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-amber-400 prose-strong:text-white prose-blockquote:border-l-primary/60 prose-blockquote:text-gray-300 prose-code:text-emerald-300 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-li:marker:text-primary scrollbar-thin"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
    
              h1: (props) => <h2 {...props} />,
            }}
          >
            {activePost.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
}
