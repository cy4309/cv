import React from 'react';

function CardWork({ title, firm, time, content, description, href }) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-gray-700 text-2xl">
          {title}
        </span>
        <span className="font-semibold title-font text-gray-700">{firm}</span>
        <span className="mt-1 text-gray-500 text-sm">{time}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-base font-medium text-gray-900 title-font mb-2">
          {content}
        </h2>
        <p className="leading-relaxed description">{description}</p>
        <a
          className="text-indigo-500 inline-flex items-center mt-4"
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
    </div>
  );
}

export default CardWork;
