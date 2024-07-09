import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '@/assets/img/DSC_9769(withoutBG).png';

function InfoSection() {
  const { t } = useTranslation();
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-9000">
            {t(`FRONTEND DEVELOPER`)}
            {/* <br className="hidden lg:inline-block" />readymade gluten */}
          </h1>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <p className="mb-8 leading-relaxed">
            {t(
              `Graduating from the Queensland University of Technology in Australia provided me with practical internship experience and the development of bilingual proficiency. Enjoying the process of building meaningful connections and making new friends, my overseas experiences, where time with loved ones was limited, have instilled in me a deep appreciation for every moment. With a mindset of courage and continuous learning, I face challenges head-on without hesitation.`
            )}
            {/* {t(`
              Graduating from the Queensland University of Technology in Australia
              provided me with practical internship experience and the development
              of bilingual proficiency.
              \n
              \n
              Enjoying the process of building meaningful connections and making
              new friends, my overseas experiences, where time with loved ones was
              limited, have instilled in me a deep appreciation for every moment.
              \n
              \n
              With a mindset of courage and continuous learning, I face challenges
              head-on without hesitation.
            `)} */}
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-80"
            alt="hero"
            src={photo}
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
