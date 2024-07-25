import React from 'react';
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

function GalleryPage() {
  const { t } = useTranslation();
  const galleryData = [
    {
      // id: 1,
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
  return (
    <div className="gallery__wrapper">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h2 className="heading">{t(`GALLERY`)}</h2>
            <span className="line--decorated"></span>
          </div>
          {galleryData.map((el, i) => (
            <GallerySection
              title={el.title}
              description={el.description}
              href={el.href}
              imageUrl1={el.imageUrl1}
              imageUrl2={el.imageUrl2}
              key={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
