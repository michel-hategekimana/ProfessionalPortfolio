import React from 'react';
import { blogPosts } from '../data/BlogData';
import BlogCards from './BlogCards'; 
import { Link } from 'react-router-dom';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Blog & Insights</h2>
          <p className="text-slate-600">Sharing my thoughts on technology and design.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCards key={post.id} post={post} />
          ))}
          
        </div>
        
      </div>
      <div className='bg-blue-500 my-5 rounded-xl px-3 py-2 flex items-center text-center  w-[150px] mx-auto'>
        <Link to={"/"}>
      <button className='text-xl text-white' >Back to home</button>

      </Link>
      </div>
    </section>
  );
};

export default BlogSection;