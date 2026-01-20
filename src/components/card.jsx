import React from 'react';

const Card = ({ title, description, tags = [], link }) => {
  return (
    <div className="group relative bg-[#ECECEC] rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col h-full overflow-hidden">
      {/* Gradient Blob Background Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Title */}
        <h3 className="poppins-bold text-2xl font-bold text-[#30364F] mb-3 group-hover:text-[#8A244B] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="poppins-regular text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
