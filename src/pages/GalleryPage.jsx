import React from 'react';
import { useTranslation } from 'react-i18next';
import GallerySection from '@/containers/GalleryPage/GallerySection';
import chiper1 from '@/assets/img/jobs/Chiper-1.png';
import chiper2 from '@/assets/img/jobs/Chiper-2.png';
import AnnoMuseum1 from '@/assets/img/jobs/AnnoMuseum-1.png';
import AnnoMuseum2 from '@/assets/img/jobs/AnnoMuseum-2.png';
import CYCTattoo1 from '@/assets/img/jobs/CYCTattoo-1.png';
import CYCTattoo2 from '@/assets/img/jobs/CYCTattoo-2.png';
import ShanhiHam1 from '@/assets/img/jobs/ShanhiHam-1.jpg';
import ShanhiHam2 from '@/assets/img/jobs/ShanhiHam-2.jpg';
import Airloft1 from '@/assets/img/jobs/Airloft-1.jpg';
import Airloft2 from '@/assets/img/jobs/Airloft-2.jpg';

function GalleryPage() {
  const { t } = useTranslation();
  const galleryData = [
    {
      // id: 1,
      title: t('chiperInventoryProject'),
      description: t('chiperInventoryProjectDescription'),
      imageUrl1: chiper1,
      imageUrl2: chiper2,
      href: 'http://218.35.165.194:8081/Login/',
    },
    {
      title: t('annoMuseumProject'),
      description: t('annoMuseumProjectDescription'),
      imageUrl1: AnnoMuseum1,
      imageUrl2: AnnoMuseum2,
      href: 'https://tibamef2e.com/tfd105/g4/index.html/',
    },
    {
      title: t('cycTattoProject'),
      description: t('cycTattoProjectDescription'),
      imageUrl1: CYCTattoo1,
      imageUrl2: CYCTattoo2,
      href: 'https://cy4309.github.io/TFD105_01CYC/MainPage.html/',
    },
    {
      title: t('shanhihamProject'),
      description: t('shanhihamProjectDescription'),
      imageUrl1: ShanhiHam1,
      imageUrl2: ShanhiHam2,
      href: 'https://www.sanhiham1956.com/',
    },
    {
      title: t('airloftProject'),
      description: t('airloftProjectDescription'),
      imageUrl1: Airloft1,
      imageUrl2: Airloft2,
      href: 'https://www.airloft.com.tw/',
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            {t(`GALLERY`)}
          </h2>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        </div>
        {galleryData.map((el, i) => (
          <GallerySection
            title={el.title}
            // description={el.description}
            description={el.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            imageUrl1={el.imageUrl1}
            imageUrl2={el.imageUrl2}
            href={el.href}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default GalleryPage;
