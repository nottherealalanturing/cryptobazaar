import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, DetailsPage, NotFound } from './pages';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="coin" element={<DetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
