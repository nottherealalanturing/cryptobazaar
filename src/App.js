import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Detail } from './components';
import { HomePage, DetailsPage, NotFound } from './pages';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="currency" element={<DetailsPage />}>
        <Route index element={<DIndex />} />
        <Route path=":id" element={<Detail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

const DIndex = () => (
  <main style={{ padding: '1rem' }}>
    <p>Select a coin</p>
  </main>
);

export default App;
