import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '@/assets/styles/app.scss';

import App from '@/App';
import MainContent from '@/components/main';
import FirstPage from '@/components/pages/1';

const el: HTMLElement | null = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route
                  path=""
                  element={
                     <MainContent>
                        <FirstPage />
                     </MainContent>
                  }></Route>
               <Route path="booking" element={<MainContent />}></Route>
            </Route>
         </Routes>
      </Router>
   </React.StrictMode>,
);
