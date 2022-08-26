import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/layouts/Navbar';

export const App = () => (
   <div className="App">
      <Navbar />

      <div className="main-content">
         <Outlet />
      </div>
   </div>
);

export default App;
