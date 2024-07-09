import React from 'react';
import CardPhoto from '@/components/CardPhoto';

function GallerySection({ title, description, imageUrl1, imageUrl2, href }) {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          {title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          {description}
        </p>
        <a
          className="text-indigo-500 inline-flex items-center mt-4 ml-4 justify-center"
          href={href}
        >
          Website
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="flex flex-wrap -m-4">
        <CardPhoto imageUrl1={imageUrl1} imageUrl2={imageUrl2} />
      </div>
    </div>
  );
}

export default GallerySection;
