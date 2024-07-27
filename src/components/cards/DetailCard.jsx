import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function DetailCard({ title, firm, time, content, description, href }) {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex flex-col">
        <span className="title">{title}</span>
        <span className="font-semibold text--primaryColor">{firm}</span>
        <span className="text-sm text--secondaryColor mt-1">{time}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-base font-medium text-primaryColor mb-2">
          {content}
        </h2>
        {/* p標籤裡，whitespace-pre-line這個換行屬性是為了讓文字能夠保留原本的換行，不會被壓縮在一起 */}
        <p className="description">{description}</p>
        <a
          className="btn--secondary"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <KeyboardArrowRightIcon />
        </a>
      </div>
    </div>
  );
}

export default DetailCard;
