import React from 'react';

import Home from '../Home';

export const MainPage = () => {
   return (
      <div className="main-content__page">
         <div className="main-content__page-1">
            <Home />
         </div>
         <div className="main-content__page-2"></div>
         <div className="main-content__page-3"></div>
      </div>
   );
};

export default MainPage;
