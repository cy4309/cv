import React from 'react';

// component_card (small)
function Card({ icon, title, subtitle }) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
      <div className="border border-gray-300 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          {icon}
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
