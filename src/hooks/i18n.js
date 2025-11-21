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
            With hands-on experience in frontend development and AI agent integration, I specialize in web ecosystem engineering and interactive animations. I was also recognized at the 2025 Epson Innovation Challenge.
            
            Originally starting out in UI/UX design while in Australia, I later transitioned into frontend development, focusing on interface logic, user flow, and technical implementation.
            
            Passionate about crafting web experiences with depth and clarity, I look forward to the opportunity to collaborate with you and to hearing from your company.
          `,
          // introduction: `
          //   Graduating from the Queensland University of Technology in Australia provided me with practical internship experience and the development of bilingual proficiency.

          //   Enjoying the process of building meaningful connections and making new friends, my overseas experiences, where time with loved ones was limited, have instilled in me a deep appreciation for every moment.

          //   With a mindset of courage and continuous learning, I face challenges head-on without hesitation.
          // `,
          // JobSection
          spe3dTitle: 'Frontend Engineer',
          spe3dFirm: 'Speed3D Technology',
          spe3dContent:
            'Independently develop the website, from uiux design, frontend development, testing and maintenance, frontend deployment, and assists in the construction and connection of the backend database.',
          spe3dDescription: `。 Independently led web development projects, covering user experience (UX) design, front-end implementation, testing, maintenance, and deployment. Also supported back-end database architecture and API integration.
                             。 Awarded Honorable Mention in Epson Innovation Challenges 2025: Contributed to the company's product submission, showcasing innovation and technical integration.
                             。 Product development experience includes:
                              - Integrating AI models into web applications to enable interactive features such as image generation and chatbot interfaces.
                              - Developing WebAR (Web-based Augmented Reality) features using MindAR and Three.js.
                              - Implementing real-time communication with AI models via WebSocket connections.
                              - Maintaining front-end websites and building interactive 3D components with Three.js.`,
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
          // tesimonial: `With a passion for photography, art, design, and a deep appreciation for history and culture, my experiences abroad have only strengthened my love for this land.

          //   In my past work experience, I handled web-related projects, initially relying heavily on my partners' programming skills. This reliance motivated me to further my education in front-end technologies, transitioning from a 2D graphic world to creating 3D web animations. The process of coding and seeing the final dynamic website come to life, much like a magician's performance, has deeply inspired me to become a "web magician" and paint on the canvas of the web.

          //   Looking ahead, I aspire to contribute to your company with my web development skills and boundless creative ideas. I eagerly anticipate the opportunity to collaborate and receive correspondence from your esteemed company.
          // `,

          //spe3d project
          spe3dProject: 'Speed3D Tech Projects',
          // spe3dProjectDescription: `
          //      I worked independently as a frontend engineer at Speed3D Technology Company, assisting the company in developing products such as FunkAI, imorph cloud platform system, Young Chien Numerology Project, Epson Connect API Project, and won the honorable mention in the 2025 Epson innovation challenges.

          //      。 React, TypeScript, Three.js, GSAP, WebSocket, WebAR.
          //      。 Web presentation, Restful API, frontend development, testing and maintenance, frontend deployment.

          //      Independently developed within the time limit, completed the UIUX prototype design, frontend and backend connection, frontend function development, testing and maintenance, online deployment, and assisted in the construction and deployment of the backend database.
          //    `,
          spe3dProjectDescription: `
              Worked as a solo Front-End Engineer at Spe3d Technology, responsible for full-cycle development from UI/UX prototyping to front-end and back-end integration. Successfully led and delivered multiple projects, including:

              。WebAR Huye: Built a mobile AR experience with MindAR, R3F, and model-viewer, using MediaPipe for facial tracking. Powered by Next.js to optimize performance and library integration. A cultural-tech project promoting folk art × interactive AR.

              。FunkAI Game Platform: Developed a real-time AI image generation and queueing system using WebSocket, integrated with LinePay and PayPal. Achieved over 100 paid generations on launch day, driving both user engagement and revenue.
              
              。Epson Connect API Integration: Implemented full OAuth authentication, scanning/printing job management, and API integration to allow remote printer control via web. Also integrated DALL·E for AI-generated visuals. Awarded Honorable Mention at the 2025 Epson Innovation Challenge.
              
              。iMorph Cloud Platform: Built complete front-end modules enabling users to upload and generate naked-eye 3D models. Streamlined the UI flow to help enterprise users effectively manage 3D model assets.
              
              。Additional projects include Snap WebAR experiences and the Young Chien Numerology Project.

                ▸ Tech Stack: React, TypeScript, GSAP, Three.js, WebSocket, WebAR
                ▸ Responsibilities: Interactive UI development, API integration, testing and maintenance, front-end deployment
                ▸ Key Achievements: Delivered all projects within 2–4 weeks, independently managing the entire development lifecycle from requirements to production. Also contributed to backend database architecture and deployment setup.
             `,
          //chiper project
          chiperInventoryProject: 'ChiperTech Inventory Management System',
          // chiperInventoryProjectDescription: `
          //   This is one of my independently developed projects, assisting Chiper Technology and the National Chung Shan Institute of Science and Technology in developing a high-magnification optical system storage solution.

          //   。 Establishment of the SQL database.
          //   。 Node.js to handle logic such as member login and permissions.
          //   。 Vue3 for screen presentation and data concatenation.

          //   Upon completion, the system can automatically calculate potential errors, helping colleagues reduce mistakes and enhance work efficiency.
          // `,
          chiperInventoryProjectDescription: `
            Independently developed a high-magnification optical storage management system to support a collaborative project between Chiper Technology and the National Chung-Shan Institute of Science & Technology (NCSIST). The system was designed to track the storage and movement of precision optical components, aiming to reduce human error and improve internal workflow efficiency.

            。Frontend Development: Built a real-time interactive interface using Vue 3, enabling data filtering, visual status indicators, and responsive user feedback.

            。Backend Logic: Developed user authentication, role-based access control, and business logic processing with Node.js.

            。Database Design: Designed and implemented an SQL database to manage part metadata, storage locations, and access records.

            。Error-prone calculation processes were fully automated, significantly reducing the risk of human error. Key outcomes include:

            ▸ 10% reduction in testing cycle time, as recognized by internal supervisors
            ▸ Lowered manual rework rates, improving overall data stability
            ▸ Enhanced collaboration and transparency between engineering and warehouse teams
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
          //cyc studio project
          cycStudioProject: 'CYC Studio',
          cycStudioProjectDescription: `
            This is my personal side project, where I independently developed a website for a tattoo artist friend. The videos and photos featured are also part of my previous photography works.
            
            。 React, GSAP, Framer-motion
          `,
          //crawl recruitment project
          crawlRecruitmentProject: 'Crawl Recruitment Platform',
          crawlRecruitmentProjectDescription: `
            This project is a job listing website that crawls data from recruitment platforms, featuring an AI agent built with FastAPI for job summarization and recommendations, deployed via Vercel.
            
            。 AI Agent, FastAPI, Python, Vercel, Serverless Functions
          `,
          //image captioning OCR Project
          imageCaptioningOCRProject: 'Image Captioning OCR',
          imageCaptioningOCRProjectDescription: `
            This project is an AI-powered image-to-text service built with FastAPI and the API Ninjas OCR API, enabling lightweight deployment on Render’s free plan. It highlights flexible architecture that can switch to PyTorch-based models for on-device image captioning.
            
            。 Hugging Face, API Ninjas, FastAPI, Render, Docker, Nginx, CI/CD, Vitest
          `,
          //mindbay project
          mindbayProject: 'MindBay',
          mindbayProjectDescription: `
            MindBay is a calming sound space for your mind.
            It features curated natural sceneries paired with soothing audio, or lets you freely input a YouTube link to create a personalized ambient experience.
            Designed for effortless relaxation and mindful breaks — no login required, just press play.
            
            。 Device-adaptive video loading, Video lazy loading, Optimized MP4 compression via FFmpeg
          `,
          //fit cycle project
          fitCycleProject: 'Fit Cycle',
          fitCycleProjectDescription: `
            This is a personalized fitness and nutrition tracking system built with React + GAS, using Google Sheets as a lightweight backend database, allowing it to function serverlessly. The system automatically calculates each user’s daily TDEE and three-phase carb strategy (low / medium / high) based on their body metrics, and instantly compares daily nutrient intake against recommended targets.
            
            。 Google Apps Script, Redux Toolkit
          `,
        },
      },
      zh: {
        translation: {
          // IntroductionSection
          'FRONTEND DEVELOPER': '前端工程師',
          introduction: `
            具備前端開發與 AI Agent 整合實作經驗，擅長網頁生態系整合與動畫互動，並於 2025 Epson Innovation Challenge 獲獎肯定。

            起初於澳洲從事 UIUX 相關設計，後投入前端開發，專注於介面邏輯、使用者流程與技術實現。

            熱衷打造具有深度體驗的網頁作品，期待能與您共事，並收到貴公司的來信。
          `,
          // introduction: `
          //   畢業於澳洲昆士蘭科技大學並在澳洲有實習實務經驗及雙語能力 ，喜好廣結善緣結交新朋友的我在海外體會到了聚少離多的場合，因此更珍惜每一分每一秒，對生活仍舊保持勇於挑戰與學習的心態，且面對挑戰永不退縮。
          // `,

          // SkillSection
          SKILLS: '技能',

          // JobSection
          'WORK EXPERIENCE': '工作經驗',
          spe3dTitle: '前端工程師',
          spe3dFirm: '啟雲科技',
          spe3dContent:
            '獨立開發網站，從使用者體驗設計、前端開發與測試維護，前端部屬上線，並協助後端資料庫建置與串接。',
          spe3dDescription: `。 獨立負責網站開發專案：涵蓋使用者體驗設計（UIUX）、前端功能實作、測試與維護，並完成部署上線。另支援後端資料庫架構設計與 API 串接。
                             。 榮獲 Epson Innovation Challenges 2025 佳作：協助公司產品參賽，展現創新與技術整合能力。
                             。 公司產品研發經驗：
                              - 整合 AI 模型至 Web 端，打造 AI 互動應用（AI 生成圖像 / 對話等）。
                              - WebAR 擴增實境功能開發（基於 MindAR / Three.js）。
                              - 串接 AI 模型與 WebSocket 實現即時通訊與即時回饋。
                              - 前端網站開發、維護與 3D 元件開發（Three.js 實作）。`,
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
          // 'MORE ABOUT ME': '更多關於我',
          // tesimonial: `喜好攝影藝術設計、喜愛歷史文化， 走過異鄉過後， 更讓我加深了對這片土地的熱愛。

          //   在過往的工作經驗中， 有承接網頁相關的案子， 當時都得仰賴夥伴的程式語言能力， 因此進修學習前端的相關技術， 從平面2D的世界轉移到3D的網站動畫。在平凡的打code中， 看到像魔術師般最終網站的動態呈現， 深深吸引著我想成為一名網站魔術師， 在網站的畫布上作畫。

          //   冀望未來能為貴司提供網頁製作的能力、源源不絕的創意企劃能力。 期待能與您共事、接到貴公司的來信。
          // `,
          AWARDS: '獎項與重要成果',

          // Header
          // GalleryPage
          'Hi, I am Yucheng Chu.': '嗨，我是朱禹丞。',
          GALLERY: '作品集',

          //spe3d project
          spe3dProject: '啟雲科技專案',
          // spe3dProjectDescription: `
          //      我在啟雲科技公司獨立擔任前端工程師一職，協助公司開發FunkAI、imorph雲平台系統、簡少年命理專案、Epson Connect api專案等產品，並於2025年 Epson innovation challenges 獲得佳作。

          //      。 React, TypeScript, Three.js, GSAP, WebSocket, WebAR
          //      。 畫面呈現、串接資料, 前端開發、測試維護、前端部屬上線

          //      在時間內獨立開發，完成UIUX 原型設計、前後端串接、前端功能開發、測試維護、上線部屬，並協助後端資料庫建置與部屬。
          //    `,
          spe3dProjectDescription: `
              於啟雲科技公司擔任獨立前端工程師，負責從 UI/UX 原型設計到前後端整合的全流程開發。期間主導並完成多項專案，包括：

              。WebAR 虎爺: 使用 MindAR 圖標辨識與 R3F 結合 Model-viewer，實作 iOS/Android 裝置上的 AR 模型展示，並利用Mediapipe來追蹤臉部姿態、效能與套件考量的問題則使用Next.js來克服。專案旨在推廣「民俗文化 × 科技互動」融合應用，以提升文化AR體驗的現代感與趣味性。

              。FunkAI 遊戲平台：以 WebSocket 架構串接 AI 圖像生成與即時排隊等待系統，並接上LinePay與PayPal金流，達到當日生成100筆，實際為公司創造金流與人流。
              
              。Epson Connect API 整合專案：完成 OAuth 流程、掃描列印任務設定與 Epson API 串接，允許使用者透過網頁遠端操控印表機，另接上Dall E圖像生成。專案於 2025 Epson Innovation Challenge 中獲得佳作肯定。
              
              。iMorph 雲平台系統：建立完整前端模組並整合資料，供業主上傳和製作裸視3D模型。優化使用者操作流程，協助企業用戶有效管理模型資源。
              
              。另還有Snap WebAR, 簡少年命理專案等。

                ▸ 使用技術：React, TypeScript, GSAP, Three.js, WebSocket, WebAR
                ▸ 負責項目：畫面互動開發、資料串接、測試與維護、前端部署上線
                ▸ 成果指標：專案平均開發時程控制於 2–4 週內，獨立完成從需求確認到正式部署流程，並協助後端資料庫架構規劃與環境設定。
             `,
          //chiper project
          chiperInventoryProject: '巨普科技倉儲系統',
          // chiperInventoryProjectDescription: `
          //   這是我其中一個獨立開發的案例，幫助巨普科技與中科院合作案做的一個高倍率光學系統倉儲系統。

          //   。 SQL 資料庫建置
          //   。 Node.Js 處理會員登入、權限等邏輯
          //   。 Vue3 畫面呈現、串接資料

          //   將有可能會出錯的地方全部自動化計算，幫助公司同仁減少出錯的機會，也加快工作效率。
          // `,
          chiperInventoryProjectDescription: `
            獨立開發完成 高倍率光學系統倉儲管理系統，協助 巨普科技 與 中科院（NCSIST） 合作專案。該系統用於追蹤高精度光學元件的入出庫與存放流程，減少人為操作錯誤並提升內部作業效率。

            。前端開發：採用 Vue 3 建立即時互動式介面，提供資料篩選、狀態視覺提示與操作回饋功能。

            。後端邏輯：以 Node.js 開發使用者登入、角色權限控管與商業邏輯處理。

            。資料庫建置：設計並實作 SQL 資料庫，管理零件資訊、倉儲位置與存取記錄。

            。針對容易出錯的計算流程進行自動化設計，大幅減少操作錯誤機率。實際成效包含：
            
            ▸ 測試週期時間縮短約 10%，獲內部主管回饋肯定
            ▸ 降低人工重工次數，提升整體資料穩定性
            ▸ 提高工程與倉儲團隊間的協同效率與資訊透明度
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
          //cyc studio project
          cycStudioProject: 'CYC 工作室',
          cycStudioProjectDescription: `
            這是我個人的side project，獨立開發的網站，裡面的影片與照片也都是我以前的攝影作品。
             
             。 React, GSAP, Framer-motion
           `,
          //crawl recruitment project
          crawlRecruitmentProject: '上班不要看職缺網',
          crawlRecruitmentProjectDescription: `
            這是我做的一個職缺列表網站，會爬取招募平台的資料，並結合以 FastAPI 架設的 AI agent，提供職缺摘要與推薦功能，部署於 Vercel。
            
            。 AI Agent, FastAPI, Python, Vercel, Serverless Functions
          `,
          //image captioning OCR Project
          imageCaptioningOCRProject: 'AI 圖像文字辨識專案',
          imageCaptioningOCRProjectDescription: `
            這是一個以 FastAPI 建構的 AI 圖像文字辨識服務，透過 API Ninjas OCR API 實現輕量化運作，部署於 Render 免費方案。專案架構具備高度彈性，可切換為基於 PyTorch 的模型以支援本地端圖像描述推論。
            
            。 Hugging Face, API Ninjas, FastAPI, Render, Docker, Nginx, CI/CD, Vitest
          `,
          //mindbay project
          mindbayProject: '心灣',
          mindbayProjectDescription: `
            心灣是一個讓你沉澱心靈的聲音空間。精選自然場景搭配音樂，或自由輸入 YouTube 連結，營造專屬放空環境。
            
            。 Device-adaptive video loading, Video lazy loading, Optimized MP4 compression via FFmpeg
          `,
          //fit cycle project
          fitCycleProject: '健康循環',
          fitCycleProjectDescription: `
            這是一個以 React + GAS 建構的個人化健身飲食紀錄系統，透過 Google Sheets 作為輕量後端資料庫，免伺服器即可運作。系統會依照使用者身體數據自動計算每日 TDEE 與三階段碳水策略（低 / 中 / 高），並將每日輸入的營養攝取量即時比對建議值。
            
            。 Google Apps Script, Redux Toolkit
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
