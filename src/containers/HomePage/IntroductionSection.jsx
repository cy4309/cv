import { React, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import p5 from 'p5';
import hero from '@/assets/img/hero/DSC_9769(withoutBG&eyes).png';
import heroDark from '@/assets/img/hero/DSC_9769(withoutBG&eyes)-dark.png';
import heroWithEyes from '@/assets/img/hero/DSC_9769(withoutBG).png';
import heroDarkWithEyes from '@/assets/img/hero/DSC_9769(withoutBG)-dark.png';

function IntroductionSection() {
  const { t } = useTranslation();
  const darkMode = useSelector(state => state.style.darkMode);

  useEffect(() => {
    const updateImage = () => {
      let imgHeroUrl = darkMode ? hero : heroDark;
      let shouldDrawEyes = window.innerWidth >= 1024;
      if (!shouldDrawEyes) {
        imgHeroUrl = darkMode ? heroWithEyes : heroDarkWithEyes;
      }
      // 移除現有的 p5 實例
      if (window.myP5) {
        window.myP5.remove();
      }
      const sketch = p => {
        let imgHeroElement;
        let eyes = [];

        p.setup = () => {
          // 創建圖片元素，但不立即創建畫布
          imgHeroElement = p.createImg(imgHeroUrl, 'hero', () => {
            p.createCanvas(imgHeroElement.width, imgHeroElement.height).parent(
              'container--p5'
            );
            // 清除舊的圖片元素
            const existingImg = document.querySelector('img[alt="hero"]');
            if (existingImg) {
              existingImg.remove();
            }
            imgHeroElement.parent('container--p5');
            imgHeroElement.style('position', 'relative');
            imgHeroElement.style('z-index', '1');
            imgHeroElement.style('width', '100%');
            p.canvas.style.width = '100%';
            p.canvas.style.position = 'absolute';
            p.canvas.style.zIndex = '0';
            // 初始化所有眼睛的位置和大小
            eyes = [
              { id: 'leftEye', x: 240, y: 105, sc: 0.03 }, // 左眼
              { id: 'rightEye', x: 295, y: 110, sc: 0.03 }, // 右眼
            ];
            // let buttonElement = p.createButton('123');
            // buttonElement.style('position', 'absolute');
            // buttonElement.position(50, 50);
          });
        };

        const drawEyes = eyes => {
          p.push(); // push, pop包住，僅會在此function影響
          p.translate(eyes.x, eyes.y);
          p.scale(eyes.sc);
          p.fill('#d2d2d2');
          p.ellipse(0, 0, 500); // 白眼球
          let ang = p.atan2(p.mouseY - eyes.y, p.mouseX - eyes.x);
          p.rotate(ang);
          p.fill(0);
          p.ellipse(50, 0, 250); // 黑眼球
          p.fill(255);
          p.ellipse(75, 50, 100); // 眼球反光
          p.pop();
        };

        p.draw = () => {
          if (shouldDrawEyes) {
            eyes.forEach(drawEyes);
          }
          // drawBackgroundLines
          // 動態改變顏色，根據時間變化，保持在藍色附近的色系
          let r = p.map(p.sin(p.millis() / 1000), -1, 1, 0, 100); // 限制紅色值在0到100之間
          let g = p.map(p.cos(p.millis() / 1000), -1, 1, 0, 100); // 限制綠色值在0到100之間
          let b = p.map(p.sin(p.millis() / 500), -1, 1, 150, 255); // 限制藍色值在150到255之間

          // 在圖像左側畫上線
          let lineHeight = 20;
          for (let i = 0; i < p.height; i += lineHeight) {
            p.strokeWeight(1);
            p.stroke(r, g, b);
            p.line(0, i, p.width, i);
          }

          // 在圖像右側畫上更多的線條作為陰影
          let shadowLineHeight = 10; // 右側陰影線條的間隔更小
          for (let i = 0; i < p.height; i += shadowLineHeight) {
            p.strokeWeight(2.5);
            p.stroke(r, g, b); // 設定陰影線條的顏色
            p.line(p.width / 1.6, i, p.width, i);
          }
        };
      };
      // 創建新的 p5 實例並存儲到全局變量中
      window.myP5 = new p5(sketch, 'container--p5');
    };
    // 初始調用
    updateImage();
    // 監聽視窗大小變化
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
      // 清理函數中移除 p5 實例
      if (window.myP5) {
        window.myP5.remove();
      }
    };
  }, [darkMode]);

  return (
    <section className="w-full flex justify-center">
      <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center justify-center">
        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center lg:pr-24 md:pr-16 lg:pb-16">
          <img className="object-cover object-center rounded" alt="hero" />
        </div> */}
        {/* <div className="lg:flex-grow md:w-1/2 flex justify-center items-center text-center flex-col md:items-start md:text-left md:mb-0"> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="heading">
            {t(`FRONTEND DEVELOPER`)}
            {/* <br className="hidden lg:inline-block" />readymade gluten */}
          </h1>
          <span className="line--decorated"></span>
          <div id="container--p5" className="w-1/2 relative">
            {/* p5 將在這個 div 中創建圖片 */}
          </div>
          <p className="introduction">{t(`introduction`)}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
