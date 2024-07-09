import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import GalleryPage from '@/pages/GalleryPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/gallery" element={<GalleryPage />} />
  </Routes>
);

export default AppRoutes;
