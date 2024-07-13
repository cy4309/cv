import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppRoutes from '@/routes/index.js';

function NavLayout() {
  return (
    <div>
      <Header />
      <div className="container max-w-screen-lg" style={{ margin: '0 auto' }}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default NavLayout;
