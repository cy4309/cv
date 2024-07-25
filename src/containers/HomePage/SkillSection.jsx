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
      subtitle:
        'Vue.js, React.js, Angular.js, Bootstrap, Tailwind.css, Sass/Scss, Pinia, Redux, p5.js',
      // 'Vue.js, React.js, Angular.js, Bootstrap, Tailwind.css, Sass/Scss, Vuex, Pinia, Redux, p5.js, 3.js',
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Backend & DB',
      subtitle: 'Node.js, Php, MySQL, SQLite, Firebase, Heroku',
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Others',
      subtitle: 'Git, Github, Scrum, Gulp, Webpack, NPM, Linux',
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Graphic Design',
      subtitle:
        'Figma, Sketch, Illustrator, Photoshop, Indesign, Premiere, Microsoft',
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Marketing',
      subtitle: 'SWOT Analysis, Community Management, Campaign Design',
    },
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Languages',
      subtitle: 'Mandarin, Taiwanese, English(advanced) IELTS: 6.5',
    },
  ];

  return (
    <section className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
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
