import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
// router
import { BrowserRouter } from 'react-router-dom';
import NavLayout from '@/layouts/NavLayout';
// import AppRoutes from '@/routes/index.js';

function App() {
  const darkMode = useSelector(state => state.style.darkMode);
  useEffect(() => {
    // 根據 darkMode 狀態動態添加或移除 `dark` 類別
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <NavLayout />
      {/* <AppRoutes /> */}
    </BrowserRouter>
  );
}

export default App;
