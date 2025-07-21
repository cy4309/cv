import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GallerySection from '@/containers/GalleryPage/GallerySection';
import chiper1 from '@/assets/img/jobs/Chiper-1.png';
import chiper2 from '@/assets/img/jobs/Chiper-2.png';
import AnnoMuseum1 from '@/assets/img/jobs/AnnoMuseum-1.png';
import AnnoMuseum2 from '@/assets/img/jobs/AnnoMuseum-2.png';
import CYCTattoo1 from '@/assets/img/jobs/CYCTattoo-1.png';
import CYCTattoo2 from '@/assets/img/jobs/CYCTattoo-2.png';
import ShanhiHam1 from '@/assets/img/jobs/ShanhiHam-1.png';
import ShanhiHam2 from '@/assets/img/jobs/ShanhiHam-2.png';
import Airloft1 from '@/assets/img/jobs/Airloft-1.png';
import Airloft2 from '@/assets/img/jobs/Airloft-2.png';
import spe3d1 from '@/assets/img/jobs/spe3d/spe3d1.png';
import spe3d2 from '@/assets/img/jobs/spe3d/spe3d2.png';
import cycStudio1 from '@/assets/img/jobs/CycStudio-1.png';
import cycStudio2 from '@/assets/img/jobs/CycStudio-2.png';
import crawlRecruitmentPlatform1 from '@/assets/img/jobs/crawlRecruitmentPlatform-1.png';
import crawlRecruitmentPlatform2 from '@/assets/img/jobs/crawlRecruitmentPlatform-2.png';
import mindbay1 from '@/assets/img/jobs/mindbay-1.png';
import mindbay2 from '@/assets/img/jobs/mindbay-2.png';

function GalleryPage() {
  const { t } = useTranslation();
  const [isSelectedProject, setIsSelectedProject] = useState(true);
  const [selectedProject, setSelectedProject] = useState('projects');

  const galleryData = [
    {
      title: t('spe3dProject'),
      description: t('spe3dProjectDescription'),
      href: 'https://epson-hey-echo.vercel.app/login',
      imageUrl1: spe3d1,
      imageUrl2: spe3d2,
      // notes: `
      //   FunkAI: https://ai.funk-ar.com/,
      //   imorph: https://imorph.spe3d.co/,
      //   YoungChienNumerologyProject,: https://face-fortune-tool.vercel.app/
      //   `,
    },
    {
      title: t('chiperInventoryProject'),
      description: t('chiperInventoryProjectDescription'),
      href: 'http://218.35.165.194:8081/Login',
      imageUrl1: chiper1,
      imageUrl2: chiper2,
    },
    {
      title: t('annoMuseumProject'),
      description: t('annoMuseumProjectDescription'),
      href: 'https://tibamef2e.com/tfd105/g4/index.html',
      imageUrl1: AnnoMuseum1,
      imageUrl2: AnnoMuseum2,
    },
    {
      title: t('cycTattoProject'),
      description: t('cycTattoProjectDescription'),
      href: 'https://cy4309.github.io/TFD105_01CYC/MainPage.html',
      imageUrl1: CYCTattoo1,
      imageUrl2: CYCTattoo2,
    },
    {
      title: t('shanhihamProject'),
      description: t('shanhihamProjectDescription'),
      href: 'https://www.sanhiham1956.com',
      imageUrl1: ShanhiHam1,
      imageUrl2: ShanhiHam2,
    },
    {
      title: t('airloftProject'),
      description: t('airloftProjectDescription'),
      href: 'https://www.airloft.com.tw',
      imageUrl1: Airloft1,
      imageUrl2: Airloft2,
    },
  ];
  const sideProjectsData = [
    {
      title: t('cycStudioProject'),
      description: t('cycStudioProjectDescription'),
      href: 'https://cyc-studio.vercel.app/',
      imageUrl1: cycStudio1,
      imageUrl2: cycStudio2,
    },
    {
      title: t('crawlRecruitmentProject'),
      description: t('crawlRecruitmentProjectDescription'),
      href: 'https://crawl-recruitment-platform.vercel.app/',
      imageUrl1: crawlRecruitmentPlatform1,
      imageUrl2: crawlRecruitmentPlatform2,
    },
    {
      title: t('mindbayProject'),
      description: t('mindbayProjectDescription'),
      href: 'https://mindbay.vercel.app/',
      imageUrl1: mindbay1,
      imageUrl2: mindbay2,
    },
  ];
  return (
    <div className="gallery__wrapper">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto overflow-x-hidden">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h2 className="heading">{t(`GALLERY`)}</h2>
            <span className="line--decorated"></span>
            <div className="w-full flex justify-center items-center gap-x-4">
              <h5
                className={`cursor-pointer ${
                  isSelectedProject
                    ? 'border-b-2 rounded-sm border-indigo-500 text-black dark:text-white'
                    : 'text-gray-600'
                }`}
                onClick={() => {
                  setIsSelectedProject(true);
                  setSelectedProject('projects');
                }}
              >
                Projects
              </h5>
              <h5
                className={`cursor-pointer ${
                  !isSelectedProject
                    ? 'border-b-2 rounded-sm border-indigo-500 text-black dark:text-white'
                    : 'text-gray-600'
                }`}
                onClick={() => {
                  setIsSelectedProject(false);
                  setSelectedProject('sideProjects');
                }}
              >
                Side-Projects
              </h5>
            </div>
          </div>
          {selectedProject === 'projects' &&
            galleryData.map((el, i) => (
              <GallerySection
                key={i}
                title={el.title}
                description={el.description}
                href={el.href}
                imageUrl1={el.imageUrl1}
                imageUrl2={el.imageUrl2}
                notes={el.notes}
              />
            ))}
          {selectedProject === 'sideProjects' &&
            sideProjectsData.map((el, i) => (
              <GallerySection
                key={i}
                title={el.title}
                description={el.description}
                href={el.href}
                imageUrl1={el.imageUrl1}
                imageUrl2={el.imageUrl2}
                notes={el.notes}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
