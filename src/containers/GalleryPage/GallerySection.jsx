import React from 'react';
import PhotoCard from '@/components/cards/PhotoCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useGSAP from '@/hooks/gsap';

function GallerySection({
  title,
  description,
  imageUrl1,
  imageUrl2,
  href,
  notes,
}) {
  useGSAP();
  const imageUrlArr = [imageUrl1, imageUrl2];
  return (
    <div className="container px-5 py-24 mx-auto">
      <h2 className="title text-center">{title}</h2>
      <div className="flex flex-col w-full mb-4">
        <p className="mx-auto description flex text-base text-left mb-8">
          <span className="inline-block w-px rounded bg-indigo-500 mt-8 mr-4"></span>
          {/* <span className="line--decorated w-px h-auto mt-8 mr-4"></span> */}
          {description}
        </p>
        {notes && <p className="">{notes}</p>}
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
        {imageUrlArr.map((el, i) => (
          <PhotoCard
            key={i}
            imageUrl={el}
            animate={i % 2 === 0 ? 'animate-left' : 'animate-right'}
          />
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
