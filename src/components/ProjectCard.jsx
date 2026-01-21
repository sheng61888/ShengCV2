import React from 'react';

const ProjectCard = ({ title, description, tags = [], link = "#" }) => {
  return (
    <div className="group relative bg-[#ECECEC]/50 backdrop-blur-lg rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col h-full overflow-hidden">
      {/* Gradient Blob Background Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="poppins-bold text-3xl font-bold text-slate-950 mb-3 group-hover:text-[#8A244B] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="poppins-regular text-md leading-relaxed mb-6 flex-grow text-slate-800">
          {description}
        </p>

        {/* Footer: Tags & View Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-auto">
          <div className="flex flex-wrap gap-2 max-w-[70%]">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-slate-950 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 self-end sm:self-auto whitespace-nowrap"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
