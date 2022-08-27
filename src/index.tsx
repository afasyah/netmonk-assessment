import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@/assets/styles/app.scss';

import App from '@/App';
import MainContent from '@/components/main';

const el: HTMLElement | null = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="" element={<MainContent />}></Route>
            </Route>
         </Routes>
      </Router>
   </React.StrictMode>,
);
