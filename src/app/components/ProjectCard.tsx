import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  stats: string;
}

export function ProjectCard({ title, description, image, stats }: ProjectCardProps) {
  return (
    <div className="card-african transform hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6 pattern-bg">
        <h3 className="text-xl font-bold text-primary-dark mb-3 african-title">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-primary font-semibold flex items-center">
          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
          {stats}
        </div>
      </div>
    </div>
  );
}