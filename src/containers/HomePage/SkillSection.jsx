import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@/components/Card';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function SkillSection() {
  const { t } = useTranslation();
  const skillsData = [
    {
      icon: <AddCircleOutlineIcon />,
      title: 'Frontend',
      subtitle:
        'Vue.js, React.js, Angular.js, Bootstrap, Tailwind.css, Sass/Scss, Vuex, Pinia, Redux',
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
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {t(`SKILLS`)}
          </h2>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        </div>
        <div className="flex flex-wrap -m-4">
          {skillsData.map((el, i) => (
            <Card
              icon={el.icon}
              title={el.title}
              subtitle={el.subtitle}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
