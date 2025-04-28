import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavLayout from '@/layouts/NavLayout';
// import AppRoutes from '@/routes/index.js';

function App() {
  const darkMode = useSelector(state => state.style.darkMode);
  const darkModeLocalStorage = localStorage.getItem('darkMode');
  useEffect(() => {
    // 根據 darkMode 狀態動態添加或移除 `dark` 類別
    if (darkModeLocalStorage === 'true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode, darkModeLocalStorage]);

  return (
    <BrowserRouter>
      <NavLayout />
      {/* <AppRoutes /> */}
    </BrowserRouter>
  );
}

export default App;
