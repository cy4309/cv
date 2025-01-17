import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailCard from '@/components/cards/DetailCard';

function EducationSection() {
  const { t } = useTranslation();
  const educationData = [
    {
      title: t('tibameTitle'),
      firm: t('tibameFirm'),
      time: 'Dec 2021 - May 2022',
      content: t('tibameContent'),
      description: t('tibameDescription'),
      href: 'https://www.tibame.com/',
    },
    {
      title: t('qutTitle'),
      firm: t('qutFirm'),
      time: '2015 - 2018',
      content: t('qutContent'),
      description: t('qutDescription'),
      href: 'https://www.qut.com/',
    },
  ];
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h2 className="heading">{t(`EDUCATION`)}</h2>
          <span className="line--decorated"></span>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {educationData.map((el, i) => (
            <DetailCard
              title={el.title}
              firm={el.firm}
              time={el.time}
              content={el.content}
              description={el.description}
              href={el.href}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
