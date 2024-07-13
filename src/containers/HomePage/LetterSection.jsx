import React from 'react';
import { useTranslation } from 'react-i18next';
import letter from '@/assets/img/Letter.png';

function LetterSection() {
  const { t } = useTranslation();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h2 className="heading">{t(`RECOMMONDATION LETTER`)}</h2>
          <span className="line--decorated"></span>
        </div>
        <div className="mx-auto flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="text-center">
              <h2 className="text-sm tracking-widest text-secondary">
                PRINCIPAL ENGINEER
              </h2>
              <h1 className="text-3xl font-medium text-primary mb-1">
                ROBERT LO
              </h1>
            </div>
            <img
              className="object-contain object-center rounded border-2 border-gray-100 m-4 min-h-[400px] lg:min-h-[950px]"
              src={letter}
              alt="letter"
            />
          </div>
          <p className="chiperLetter w-full lg:w-1/2">{t(`chiperLetter`)}</p>
        </div>
      </div>
    </section>
  );
}

export default LetterSection;
