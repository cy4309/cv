import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '@/features/styleSlice.js';
import { useTranslation } from 'react-i18next';
import avatarWhite from '@/assets/img/DSC_9760(withoutBG&round).png';
import avatarBlack from '@/assets/img/DSC_9760_black(withoutBG&round).png';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.style.darkMode);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation(); // 使用 useTranslation Hook
  const [typedText, setTypedText] = useState('');
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const fullText = t('Hi, I am Yucheng Chu.'); // 使用t函數獲取當前語言的文本
    setTypedText(''); // 每次fullText變化時重置文本，開始新的打印過程

    const timeouts = []; // 用於存儲所有setTimeout的ID
    for (let i = 0; i < fullText.length; i++) {
      const timeoutId = setTimeout(() => {
        setTypedText(prevText => prevText + fullText.charAt(i));
      }, i * 150); // 每个字母打印的延遲逐漸增加
      timeouts.push(timeoutId);
    }

    return () => timeouts.forEach(clearTimeout); // 清理定時器
  }, [t, i18n.language]); // 當前言變化時重新觸發效果

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
    localStorage.setItem('darkMode', !darkMode);
  };

  const handleNavigate = () => {
    navigate('/gallery');
  };

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLanguage); // 切換語言
  };

  return (
    <header className="relative flex justify-center">
      <div
        className={`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed w-full z-10 ${
          isShrink ? 'shrink-header' : ''
        }`}
        // style={{ backgroundColor: 'rgba(243,244,246,0.4)' }}
      >
        <Link to="/" className="flex font-medium items-center h-full">
          <img
            className="h-full max-w-[80px]"
            src={darkMode ? avatarWhite : avatarBlack}
            alt="avatar"
          />
          <p className="text--tertiaryColor min-w-[80px]">{typedText}</p>
        </Link>

        <nav className="md:ml-auto flex content-between items-center text-base justify-center h-full">
          <button
            // onClick={() => dispatch(toggleDarkMode())}
            onClick={handleDarkMode}
            className="btn--primary h-full"
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </button>
          <button className="btn--primary h-full" onClick={toggleLanguage}>
            <TranslateIcon />
          </button>
          <button onClick={handleNavigate} className="btn--primary h-full">
            <p>{t(`GALLERY`)}</p>
            <KeyboardArrowRightIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
