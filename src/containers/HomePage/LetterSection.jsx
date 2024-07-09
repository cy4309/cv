import React from 'react';
import { useTranslation } from 'react-i18next';
import letter from '@/assets/img/Letter.png';

function LetterSection() {
  const { t } = useTranslation();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {t(`RECOMMONDATION LETTER`)}
          </h2>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        </div>
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={letter}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              PRINCIPAL ENGINEER
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              ROBERT LO
            </h1>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center"></div>
            </div>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">{t(`chiperLetter`)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetterSection;
