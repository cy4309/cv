import React from 'react';
import { useTranslation } from 'react-i18next';
import BusinessCard from '@/components/cards/BusinessCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import useGSAP from '@/hooks/gsap';

function SkillSection() {
  const { t } = useTranslation();
  useGSAP();

  const skillsData = [
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Frontend',
      subtitle: `- React, Vue, Angular, TypeScript,
      - Tailwind, Bootstrap, Sass/Scss,
      - Pinia, Redux, Rematch,
      - Three, R3f, GSAP, P5,`,
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Backend & DB',
      subtitle: `- Node.js, Express, WebSocket,
      - Python, FastAPI,
      - MySQL, SQLite, Firebase,`,
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Deployment & Others',
      subtitle: `- Vercel, Render, Heroku, AppsScript,
      - Git, Github, Scrum,
      - Vite, Gulp, Webpack,`,
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Uiux Design',
      subtitle: `- Figma, Adobe Series(AI, PS, PR),`,
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Marketing',
      subtitle: 'SWOT Analysis, Community Management, Campaign Design,',
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Languages',
      subtitle: 'English(advanced), Mandarin, Taiwanese,',
    },
  ];

  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto overflow-x-hidden">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h2 className="heading">{t(`SKILLS`)}</h2>
          <span className="line--decorated"></span>
        </div>
        <div className="flex flex-wrap -m-4">
          {skillsData.map((el, i) => (
            <BusinessCard
              icon={el.icon}
              title={el.title}
              subtitle={el.subtitle}
              animate={i % 2 === 0 ? 'animate-left' : 'animate-right'}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
