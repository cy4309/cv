// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // 通過 use 方法將 i18next 傳遞給 react-i18next
  .init({
    resources: {
      en: {
        translation: {
          // IntroductionSection
          introduction: `
            Graduating from the Queensland University of Technology in Australia provided me with practical internship experience and the development of bilingual proficiency. 
            
            Enjoying the process of building meaningful connections and making new friends, my overseas experiences, where time with loved ones was limited, have instilled in me a deep appreciation for every moment. 
            
            With a mindset of courage and continuous learning, I face challenges head-on without hesitation.
          `,
          // JobSection
          spe3dTitle: 'Frontend Engineer',
          spe3dFirm: 'Speed3D Technology',
          spe3dContent:
            'Independently develop the website, from uiux design, frontend development, testing and maintenance, frontend deployment, and assists in the construction and connection of the backend database.',
          spe3dDescription: `。 Help the company win the award in Epson innovation challenges 2025.
             。 Company product development: FunkAI, imorph cloud platform system, Young Chien numerology project, Epson Connect api project.
             。 Frontend website maintenance and Three.js implementation.
            `,
          chiperTitle: 'Software Engineer',
          chiperFirm: 'Chiper Technology',
          chiperContent:
            'For a company specializing in surveillance cameras and smart identification systems, I was responsible for developing and maintaining the website. This includes integrating images into the web pages for customers to view.',
          chiperDescription: `。 Independently developed 3 websites and provided online services, starting from scratch from front-end development to back-end database construction.
             。 Maintain the company's existing website and optimize its user experience.
             。 Collaborative development of websites related to AI and LiDAR, planning and development of Web Application system projects, installation and construction, online introduction and system integration.
            `,
          shanhihamTitle: 'Visual Designer',
          shanhihamFirm: 'ShanHi Ham',
          shanhihamContent: `
            One of the preferred brands of Jinhua ham for the New Year in Taiwan, our team and I were fully involved in designing the corporate website and creating a new corporate brand image.
          `,
          shanhihamDescription: `
                。 Helped the company successfully transform from a New Year shopping street to having its own cash flow website (API connected with ECPay).
                。 You can now order food on the food delivery platform (e.g. FoodPanda).
                。 Helped create fan pages and Google Analytics.
              `,

          airloftTitle: 'UIUX Designer',
          airloftFirm: 'Airloft',
          airloftContent: `At a new start-up company in Taiwan's rental housing network, I contributed to UI design and managed social networking site operations. As a result, the website attracted 1,000 users within the first two months.`,
          airloftDescription: ``,

          // EducationSection
          tibameTitle: 'Front-End Training Camp',
          tibameFirm: 'Tibame',
          tibameContent: `Front-end technology, back-end database construction and connection, UIUX.`,
          tibameDescription: ``,
          qutTitle: 'Creative Industries',
          qutFirm: 'Queensland University of Technology',
          qutContent: `Art design, marketing, event planning and execution, global entertainment industry trends, cultural creativity.`,
          qutDescription: ``,

          // LetterSection
          chiperLetter: `To Whom It May Concern,
            
            It is my great honor to provide this letter of recommendation for Yucheng Chu. During his tenure at Chiper Technology Co., Ltd., Yucheng worked in the computer information department under my supervision for over a year.
            
            During our collaboration, Yucheng demonstrated himself to be a dedicated, positive, creative, and reliable team player. He significantly contributed to our company by enhancing the interface design of our official website, implementing warehouse inventory management, and establishing a project progress tracking system. These initiatives immediately enhanced our administrative efficiency and reduced communication gaps.
            
            Yucheng also played a key role in documenting our test processes, which streamlined team operations and reduced our testing cycle time by 10%.
            
            In addition to his assigned responsibilities, Yucheng frequently assisted colleagues with computer-related issues and willingly shared his knowledge to enhance the team's technical capabilities.
            
            I am confident in Yucheng's ability to excel in any team and successfully complete assigned tasks. For further information, please feel free to contact me at weitinglo@chiper.com.tw.

            Sincerely,
            Robert Lo
            Principal Engineer
          `,

          // TesimonialsSection
          tesimonial: `With a passion for photography, art, design, and a deep appreciation for history and culture, my experiences abroad have only strengthened my love for this land.
           
            In my past work experience, I handled web-related projects, initially relying heavily on my partners' programming skills. This reliance motivated me to further my education in front-end technologies, transitioning from a 2D graphic world to creating 3D web animations. The process of coding and seeing the final dynamic website come to life, much like a magician's performance, has deeply inspired me to become a "web magician" and paint on the canvas of the web.
            
            Looking ahead, I aspire to contribute to your company with my web development skills and boundless creative ideas. I eagerly anticipate the opportunity to collaborate and receive correspondence from your esteemed company.
          `,

          //chiper project
          chiperInventoryProject: 'ChiperTech Inventory Management System',
          chiperInventoryProjectDescription: `
            This is one of my independently developed projects, assisting Chiper Technology and the National Chung Shan Institute of Science and Technology in developing a high-magnification optical system storage solution.
            
            。 Establishment of the SQL database.
            。 Node.js to handle logic such as member login and permissions.
            。 Vue3 for screen presentation and data concatenation.

            Upon completion, the system can automatically calculate potential errors, helping colleagues reduce mistakes and enhance work efficiency.
          `,
          //annoMusuem project
          annoMuseumProject: 'Anno Museum',
          annoMuseumProjectDescription: `
            For my group assignment in Tibame, I was responsible for:

            。 Web phone mock-up and RWD design
            。 Website visual design (e.g. Logo)
            。 JS mini-games (comparison, program judgment)
            。 HTML & SASS web page writing
            。 Group development (Git version control, Gulp)
            。 Vue.js front-end and back-end database connection
          `,
          //cycTattoo project
          cycTattoProject: 'Cyc Tattoo Ink',
          cycTattoProjectDescription: `
            This project was completed as an independent assignment at Tibame. The videos and photos featured are part of my previous photography works. My primary goal is to assist my friend, a tattoo artist, by promoting their work online.
          `,
          //shanhiham project
          shanhihamProject: 'Shanhi Ham',
          shanhihamProjectDescription: `
            Assisting in the digital transformation of traditional industries, we have successfully developed an e-commerce platform and a food delivery platform for consumers to choose from.
            
            。 Make market segmentation (market research, competitive product analysis)
            。 Electronic and youthful product and service processes
            。 Expand new customer sources
            。 Cultural preservation and sustainable management
          `,
          //airloft project
          airloftProject: 'Airloft',
          airloftProjectDescription: `
            In Taipei, in 2019, my friends and I launched a rental housing platform. From ground zero, we developed the website structure and attracted 1,000 users within two months, with a peak of 2,000 views in a single day. I contributed to the UI visual design of the website and managed its social media operations, including content creation and shooting.
          `,
        },
      },
      zh: {
        translation: {
          // IntroductionSection
          'FRONTEND DEVELOPER': '前端工程師',
          introduction: `
            畢業於澳洲昆士蘭科技大學並在澳洲有實習實務經驗及雙語能力 ，喜好廣結善緣結交新朋友的我在海外體會到了聚少離多的場合，因此更珍惜每一分每一秒，對生活仍舊保持勇於挑戰與學習的心態，且面對挑戰永不退縮。
          `,

          // SkillSection
          SKILLS: '技能',

          // JobSection
          'WORK EXPERIENCE': '工作經驗',
          spe3dTitle: '前端工程師',
          spe3dFirm: '啟雲科技',
          spe3dContent:
            '獨立開發網站，從使用者體驗設計、前端開發與測試維護，前端部屬上線，並協助後端資料庫建置與串接。',
          spe3dDescription: `。 幫助公司在Epson innovation challenges 2025獲得佳作。
                              。 公司產品開發: FunkAI, imorph雲平台系統, 簡少年命理專案, Epson Connenct api專案。
                              。 前端網站維護、Three.js實作。`,
          chiperTitle: '軟體工程師',
          chiperFirm: '巨普科技',
          chiperContent:
            '監視攝影機與智慧判識系統的公司，我在其負責開發網站、網站維護以及串聯部分影像至網頁供客戶查看。',
          chiperDescription: `。 獨立開發3個網站並在線服務中，從0開始從前端開發至後端資料庫的建置。
                              。 維護公司現有網站，並優化其使用者體驗。
                              。 協同開發與AI、光達有關之網站，Web Application系統專案之規劃與開發 、安裝建置、上線導入及系統整合。`,
          shanhihamTitle: '網頁視覺設計',
          shanhihamFirm: '上海火腿',
          shanhihamContent: `台灣年貨金華火腿的首選品牌之一，我與夥伴全權幫助企業網站設計與全新的企業品牌形象設計。`,
          shanhihamDescription: `
            。 幫助公司從年貨大街成功轉型到有自己的金流網站(與綠界串接API)。
            。 目前已經可以在美食外送平台(e.g. FoodPanda)上點餐選購。
            。 幫忙建立粉絲專頁與使用Google Analytics。`,
          airloftTitle: 'UIUX 設計師',
          airloftFirm: 'Airloft 看房去租屋網',
          airloftContent: `台灣租屋網中的其中一間新創公司，參與開發網頁前端UI設計以及社群網站經營，2個月內達成1000用戶數。`,
          airloftDescription: ``,

          // EducationSection
          EDUCATION: '教育背景',
          tibameTitle: 'Tibame 緯育前端班',
          tibameFirm: 'Tibame 緯育',
          tibameContent: `前端技術、後端資料庫建置與串接、UIUX。`,
          tibameDescription: ``,
          qutTitle: '文創產業',
          qutFirm: '澳洲昆士蘭科技大學',
          qutContent: `藝術設計、市場行銷、活動企劃與執行、全球娛樂產業動向、文化創意。`,
          qutDescription: ``,

          // LetterSection
          'RECOMMONDATION LETTER': '主管推薦信',
          chiperLetter: `敬啟者，
            
            我非常榮幸為朱禹丞提供這封推薦信。在巨普科技股份有限公司，我們一起在電腦資訊部共事並擔任他的主管達一年以上。
            
            在我們一起工作的期間內，朱禹丞表現優秀，展現了他勤奮、積極、富有創造力且可靠的團隊 成員一面。在共事的期間，朱禹丞提升了我們官方網站的介面設計，建置了倉庫庫存管理，以 及專案進度追蹤系統。這立即提升了我們公司的行政效率，減少了溝通所造成的資訊落差問題。
            
            他還幫助團隊撰寫測試流程文件，使我們的團隊更加順暢地運作，這個流程使我們的測試週期時間縮短了 10%。
            
            除了滿足指派的工作內容外，他也時常幫助其他同事解決電腦相關的問題，並樂於與團隊分享所學的技術，希望以各種可能的方式提升同事間彼此的技術能力。
            
            我有信心他在不同的團隊中皆可妥善完成指派的任務。如果您需要更多資訊，請隨時與我聯 絡，我的電子郵件地址是 weitinglo@chiper.com.tw。

            Sincerely,
            Robert Lo
            Principal Engineer
          `,

          // TesimonialsSection
          'MORE ABOUT ME': '更多關於我',
          tesimonial: `喜好攝影藝術設計、喜愛歷史文化， 走過異鄉過後， 更讓我加深了對這片土地的熱愛。
            
            在過往的工作經驗中， 有承接網頁相關的案子， 當時都得仰賴夥伴的程式語言能力， 因此進修學習前端的相關技術， 從平面2D的世界轉移到3D的網站動畫。在平凡的打code中， 看到像魔術師般最終網站的動態呈現， 深深吸引著我想成為一名網站魔術師， 在網站的畫布上作畫。
            
            冀望未來能為貴司提供網頁製作的能力、源源不絕的創意企劃能力。 期待能與您共事、接到貴公司的來信。
          `,

          // Header
          // GalleryPage
          'Hi, I am Yucheng Chu.': '嗨，我是朱禹丞。',
          GALLERY: '作品集',

          //chiper project
          chiperInventoryProject: '巨普科技倉儲系統',
          chiperInventoryProjectDescription: `
            這是我其中一個獨立開發的案例，幫助巨普科技與中科院合作案做的一個高倍率光學系統倉儲系統。
            
            。 SQL 資料庫建置
            。 Node.Js 處理會員登入、權限等邏輯
            。 Vue3 畫面呈現、串接資料

            將有可能會出錯的地方全部自動化計算，幫助公司同仁減少出錯的機會，也加快工作效率。
          `,
          //annoMusuem project
          annoMuseumProject: '新世紀博物館',
          annoMuseumProjectDescription: `
            為我在緯育Tibame的團體專題作品，我主要負責：

            。 網頁手機mock-up與RWD設計
            。 網站視覺設計(e.g. Logo)
            。 JS小遊戲(比對、程式判斷)
            。 HTML & SASS網頁撰寫
            。 團體開發(Git版控、Gulp)
            。 Vue.js前後台串接資料庫
          `,
          //cycTattoo project
          cycTattoProject: 'CYC 刺青工作室',
          cycTattoProjectDescription: `
            為我在緯育Tibame的個人專題作品， 裡面的影片與照片也都是我以前的攝影作品。 主要想協助刺青師朋友宣傳作品用。
          `,
          //shanhiham project
          shanhihamProject: '上海火腿',
          shanhihamProjectDescription: `
            協助傳統產業轉型，目前有自己的電商平台、美食外送平台供消費者選購。

            。 做出市場區隔(市場調查、競品分析)
            。 產品與服務流程電子化、年輕化
            。 擴展新客源
            。 文化保存、永續經營
          `,
          //airloft project
          airloftProject: 'Airloft 看房去租屋網',
          airloftProjectDescription: `
            2019年我和朋友在台北創業架設的一個租屋網平台，從0到目前看到的網站架構，2個月內用戶數也從原本的0來到了1000人、單日瀏覽次數最高也達到2000人，其中參與開發網站的UI視覺設計，以及後續社群網站的經營與拍攝內容之工作。
          `,
        },
      },
    },
    lng: 'en', // 預設語言
    fallbackLng: 'en', // 如果當前語言沒有翻譯則回退到這個語言
    interpolation: {
      escapeValue: false, // 不需要對結果做 XSS 處理
    },
  });

export default i18n;
