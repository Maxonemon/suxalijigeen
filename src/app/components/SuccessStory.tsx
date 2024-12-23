import React from 'react';

interface SuccessStoryProps {
  name: string;
  village: string;
  story: string;
  image: string;
  product: string;
}

export function SuccessStory({ name, village, story, image, product }: SuccessStoryProps) {
  return (
    <div className="card-african overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 relative">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-b"></div>
        </div>
        <div className="p-6 md:w-2/3 pattern-bg">
          <h3 className="text-xl font-bold text-primary-dark mb-2 african-title">{name}</h3>
          <p className="text-primary mb-4 flex items-center">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            {village} - {product}
          </p>
          <p className="text-gray-700">{story}</p>
        </div>
      </div>
    </div>
  );
}