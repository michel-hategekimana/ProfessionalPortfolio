// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "Community Services Platform",
//     description:
//       "A web platform that connects users with community services and resources.",
//     role: "Frontend Developer (Contributor)",
//     contributions: [
//       "Built responsive UI using React and Tailwind CSS",
//       "Integrated APIs to display dynamic service data",
//       "Improved user experience and layout structure",
//     ],
//     tech: ["React", "Tailwind", "Node.js"],
//     github: "#", // replace with repo if available
//     live: "https://community-services-nyabiheke-cohort4.netlify.app/",
//     image: "/images/project1.png", // replace with a screenshot if possible
//   },
//   {
//     title: "CS Website",
//     description:
//       "A responsive website for managing and displaying community information.",
//     role: "Frontend Developer (Contributor)",
//     contributions: [
//       "Developed reusable components",
//       "Improved responsiveness across devices",
//       "Fixed UI bugs and improved performance",
//     ],
//     tech: ["React", "Express"],
//     github: "#",
//     live: "https://cs-website-1.onrender.com/",
//     image: "/images/project2.png",
//   },
// ];

// export default function Projects() {
//   return (
//     <section className="bg-gray-50 py-16 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         {/* TITLE */}
//         <h2 className="text-4xl font-bold text-gray-800 text-center">
//           My Projects
//         </h2>
//         <p className="text-gray-600 text-center mt-4">
//           Here are some of the projects I contributed to
//         </p>

//         {/* PROJECT GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition transform duration-300"
//             >
//               {/* IMAGE */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />

//               {/* CONTENT */}
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-600 mt-3 text-sm">
//                   {project.description}
//                 </p>

//                 <p className="text-xs text-green-600 mt-2">{project.role}</p>

//                 <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
//                   {project.contributions.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>

//                 {/* TECH STACK */}
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {project.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="text-xs bg-gray-100 px-3 py-1 rounded-full"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* LINKS */}
//                 <div className="flex gap-4 mt-6">
//                   {project.github !== "#" && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       className="flex items-center gap-2 text-gray-700 hover:text-black"
//                     >
//                       <FaGithub /> Code
//                     </a>
//                   )}

//                   <a
//                     href={project.live}
//                     target="_blank"
//                     className="flex items-center gap-2 text-blue-600 hover:underline"
//                   >
//                     <FaExternalLinkAlt /> Live
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { ExternalLink } from 'lucide-react'; // Icons from lucide-react

const projects = [
  {
    title: "Online Booking Community Service Platform",
    description: "A full-featured platform to book and manage community services, including service search, location filtering, and a provider gallery. Features a responsive, intuitive interface for users and providers.",
    image: "/images/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "Stripe"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Alight Coding School LMS",
    description: "A comprehensive platform for online coding education, featuring course enrollment, user management, and project application workflow. Optimized for student onboarding and progress tracking.",
    image: "/images/project1.png",
    tags: ["Next.js", "Firebase", "React", "Tailwind CSS", "Vercel", "LMS"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    title: "Custom Developer Portfolio Builder",
    description: "A dynamic and customizable portfolio website builder, featuring elegant templates, integrated CMS, smooth animations, and modern layout options. Allows developers to showcase their projects professionally.",
    image: "/path-to-portfolio-image.png",
    tags: ["Next.js", "Framer Motion", "Contentful CMS", "Tailwind CSS", "Vercel"],
    liveLink: "#",
    codeLink: "#"
  }
];

const Project = () => {
  return (
    <section className="py-20 px-6 bg-white max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating expertise in frontend development, 
          UI/UX design, and innovative problem-solving across various industries and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Image Placeholder */}
            <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Project+Preview'; }}
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-4">
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
                  {/* <Github size={16} /> Code */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;