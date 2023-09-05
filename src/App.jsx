import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/Components/CV/CV';
import { Calendar } from './App/Components/Calendar/Calendar';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/Components/FAQ/FAQ';
import { TechStack } from './App/TechStack/TechStack';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="tech-stack/*" element={<TechStack />} />
          <Route path="FAQ/*" element={<FAQ />} />

          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
