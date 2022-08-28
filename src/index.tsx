import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import '@/assets/styles/app.scss';

import App from '@/App';
import MainPage from '@/views';
import BookingList from '@/views/booking';
import Booking from '@/views/booking/_id';

const el: HTMLElement | null = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="" element={<MainPage />}></Route>
               <Route path="booking" element={<BookingList />}></Route>
               <Route path="booking/:id" element={<Booking />}></Route>
            </Route>
         </Routes>
      </Router>
   </React.StrictMode>,
);
