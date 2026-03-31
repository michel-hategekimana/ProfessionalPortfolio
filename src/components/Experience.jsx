import React from 'react';
import { Code2, Paintbrush, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Core",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"]
  },
  {
    title: "Styling & UI",
    icon: <Paintbrush className="w-6 h-6 text-blue-600" />,
    description: "Crafting beautiful, modern designs efficiently.",
    skills: ["Tailwind CSS", "Responsive Design", "UI/UX Implementation"]
  },
  {
    title: "Backend Basics",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    description: "Understanding server-side logic and data flow.",
    skills: ["Basic Backend", "RESTful APIs", "JSON", "Node.js (Familiar)"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">My Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life on the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {category.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                {category.description}
              </p>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-700 font-medium">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;