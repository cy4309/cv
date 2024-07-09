import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppRoutes from '@/routes/index.js';

function NavLayout() {
  return (
    <div className="nav__wrapper">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default NavLayout;
