import React from 'react';
import { useTranslation } from 'react-i18next';
import DetailCard from '@/components/cards/DetailCard';

const WorkSection = () => {
  const { t } = useTranslation();
  const worksData = [
    {
      title: t('chiperTitle'),
      firm: t('chiperFirm'),
      time: 'Jun 2022 - Oct 2023',
      content: t('chiperContent'),
      description: t('chiperDescription'),
      href: 'https://www.chiper.com.tw/index.html#!/home/',
    },
    {
      title: t('shanhihamTitle'),
      firm: t('shanhihamFirm'),
      time: 'Dec 2020 - 2021',
      content: t('shanhihamContent'),
      description: t('shanhihamDescription'),
      href: 'https://www.sanhiham1956.com/',
    },
    {
      title: t('airloftTitle'),
      firm: t('airloftFirm'),
      time: 'Dec 2018 - Jun 2019',
      content: t('airloftContent'),
      description: t('airloftDescription'),
      href: 'https://www.airloft.com.tw/',
    },
  ];
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h2 className="heading">{t(`WORK EXPERIENCE`)}</h2>
          <span className="line--decorated"></span>
        </div>
        <div className="-my-8 divide-y-2 divide-gray-100">
          {worksData.map((el, i) => (
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
};

export default WorkSection;
