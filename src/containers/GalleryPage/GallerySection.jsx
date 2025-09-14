import PhotoCard from '@/components/cards/PhotoCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useGSAP from '@/hooks/gsap';

function GallerySection({
  title,
  description,
  imageUrl1,
  imageUrl2,
  hrefs = [],
}) {
  useGSAP();
  const imageUrlArr = [imageUrl1, imageUrl2];
  return (
    <div className="container px-5 py-24 mx-auto">
      <h2 className="title text-center">{title}</h2>
      <div className="mb-4 flex flex-col w-full">
        <p className="mx-auto description flex text-base text-left">
          <span className="mt-8 mr-4 inline-block w-px rounded bg-indigo-500"></span>
          {/* <span className="line--decorated w-px h-auto mt-8 mr-4"></span> */}
          {description}
        </p>
        {hrefs.length > 0 && (
          <div className="w-full flex flex-col sm:flex-row justify-between items-stretch">
            {hrefs.map(({ label, url }, i) => (
              <a
                key={i}
                className="btn--secondary p-2 w-full flex items-center"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {label}
                <KeyboardArrowRightIcon className="ml-1" />
              </a>
            ))}
          </div>
        )}
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
