import React from 'react';
import PhotoCard from '@/components/cards/PhotoCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function GallerySection({ title, description, imageUrl1, imageUrl2, href }) {
  return (
    <div className="container px-5 py-24 mx-auto">
      <h2 className="title text-center">{title}</h2>
      <div className="flex flex-col w-full mb-4">
        <p className="mx-auto description flex text-base text-left mb-8">
          <span className="inline-block w-px rounded bg-indigo-500 mt-8 mr-4"></span>
          {/* <span className="line--decorated w-px h-auto mt-8 mr-4"></span> */}
          {description}
        </p>
        <a
          className="btn--secondary w-auto"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <KeyboardArrowRightIcon />
        </a>
      </div>
      <div className="flex flex-wrap -m-4 min-h-[150px] lg:min-h-[200px]">
        <PhotoCard imageUrl1={imageUrl1} imageUrl2={imageUrl2} />
      </div>
    </div>
  );
}

export default GallerySection;
