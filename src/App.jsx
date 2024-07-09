import React from 'react';
// router
import { BrowserRouter } from 'react-router-dom';
import NavLayout from '@/layouts/NavLayout';
// import AppRoutes from '@/routes/index.js';

function App() {
  return (
    <BrowserRouter>
      <NavLayout />
      {/* <AppRoutes /> */}
    </BrowserRouter>
  );
}

export default App;
