import React from 'react';

// component_BusinessCard (small)
function BusinessCard({ icon, title, subtitle }) {
  return (
    // <div className="xl:w-1/3 md:w-1/2 p-4 w-full">
    <div className="md:w-1/2 p-4 w-full">
      <div className="border border-gray-300 p-6 rounded-lg h-full">
        {/* <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"> */}
        <div className="flex items-center mb-2">
          <div
            className="btn--secondary w-auto p-2"
            style={{ margin: 'auto 0' }}
          >
            {icon}
          </div>
          <h2 className="title w-full ml-2">{title}</h2>
        </div>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default BusinessCard;
