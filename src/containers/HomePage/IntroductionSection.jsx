import React from 'react';
import { useTranslation } from 'react-i18next';
// import hero from '@/assets/img/DSC_9769(withoutBG).png';

function IntroductionSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex justify-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center lg:pr-24 md:pr-16 lg:pb-16">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={hero}
          />
        </div> */}
        {/* <div className="lg:flex-grow md:w-1/2 flex justify-center items-center text-center flex-col md:items-start md:text-left md:mb-0"> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="heading">
            {t(`FRONTEND DEVELOPER`)}
            {/* <br className="hidden lg:inline-block" />readymade gluten */}
          </h1>
          <span className="line--decorated"></span>
          <p className="introduction">{t(`introduction`)}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
