import React from 'react';

function PhotoCard({ imageUrl, animate }) {
  return (
    <div className="lg:w-1/2 p-4">
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4"> */}
      <div className="flex flex-wrap lg:flex-nowrap">
        <img
          alt="gallery"
          className={`inset-0 w-full object-cover object-center border-2 border-gray-400 ${animate}`}
          // className="inset-0 w-full h-full object-cover object-center border-2 border-gray-100"
          src={imageUrl}
        />
        {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            THE SUBTITLE
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shooting Stars
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default PhotoCard;
