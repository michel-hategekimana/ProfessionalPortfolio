

import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Online Booking Community Service Platform",
    description: "A full-featured platform to book and manage community services, including service search, location filtering, and a provider gallery. Features a responsive, intuitive interface for users and providers.",
    image: "/images/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind","Vercel"],
    liveLink: "https://community-services-nyabiheke-cohort4.netlify.app/",
    codeLink: "#"
  },
  {
    title: "Alight Coding School LMS",
    description: "A comprehensive platform for online coding education, featuring course enrollment, user management, and project application workflow. Optimized for student onboarding and progress tracking.",
    image: "/images/project1.png",
    tags: [ "React", "Tailwind CSS","Node.js", "Express", "MongoDB", "Vercel"],
    liveLink: "https://cs-website-1.onrender.com/",
    codeLink: "#"
  },
  {
    title: "Custom Developer Portfolio Builder",
    description: "A dynamic and customizable portfolio website builder, featuring elegant templates, integrated CMS, smooth animations, and modern layout options.",
    image: "/images/project3.png",
    tags: ["React", "Tailwind CSS", "Vercel","Node.js", "Express", "MongoDB", ],
    liveLink: "#",
    codeLink: "#"
  }
];

const Project = () => {
  return (
    <section className="pt-30 pb-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent projects, highlighting contributions across both frontend and backend development, 
          delivering seamless user experiences, scalable solutions, and innovative problem-solving across different technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover "
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Project+Preview'; }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-md mb-6 line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={project.codeLink}
                    className="flex-1 flex items-center justify-center gap-2 border border-slate-300 text-slate-700 py-2.5 px-4 rounded-lg font-medium hover:bg-slate-50 transition-colors text-sm"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;