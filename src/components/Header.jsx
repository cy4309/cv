import { React } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import avatar from '@/assets/img/DSC_9760(withoutBG&round).png';
// import LightModeIcon from '@mui/icons-material/LightMode';
import TranslateIcon from '@mui/icons-material/Translate';

function Header() {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation(); // 使用 useTranslation Hook

  const handleNavigate = () => {
    navigate('/gallery');
  };
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage); // 切換語言
  };
  return (
    <header className="text-gray-700 body-font bg-gray-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-10">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={avatar} alt="" style={{ width: '80px' }} />
          <span className="ml-3 text-xl">{t(`Hi, I am Yucheng Chu.`)}</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link> */}
          {/* <button className="inline-flex items-center bg-gray-200 text-indigo-500 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 mr-3">
            <LightModeIcon />
          </button> */}
          <button
            className="inline-flex items-center bg-gray-200 text-indigo-500 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 mr-3"
            onClick={toggleLanguage}
          >
            <TranslateIcon />
          </button>
        </nav>
        <button
          onClick={handleNavigate}
          className="inline-flex items-center bg-gray-200 text-indigo-500 font-bold border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
        >
          {t(`GALLERY`)}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
