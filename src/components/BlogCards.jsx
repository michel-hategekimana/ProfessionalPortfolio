import React, { useState } from "react";

const BlogCards = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white p-6 hover:shadow-lg transition-all flex flex-col h-full">
      <span className="text-blue-600 bg-blue-50 w-fit px-2 py-1 rounded text-xs font-bold uppercase">
        {post.category}
      </span>
      <h3 className="text-xl font-bold mt-4 mb-2">{post.title}</h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
        {post.description}
      </p>

      <div className="mt-auto flex justify-between items-center">
        <span className="text-xs text-slate-400">{post.date}</span>
        <button
          onClick={() => setIsOpen(true)}
          className="text-blue-600 font-medium hover:underline text-sm"
        >
          Read More →
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              {post.content}
            </p>

            <div className="bg-slate-900 p-4 rounded-lg">
              <p className="text-slate-400 text-xs mb-2 uppercase">
                Code Snippet:
              </p>
              <pre className="text-blue-300 font-mono text-sm overflow-x-auto">
                <code>{post.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCards;
