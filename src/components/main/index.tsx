import React from 'react';

import Home from '../Home';

export const MainPage = () => {
   return (
      <div className="main-content">
         <div className="main-content__navigation">
            <button className={`go-back ${true && 'go-back--hidden'}`}>
               <img src="/images/arrow-back.png" width={24} />
               <span>Go Back</span>
            </button>
         </div>

         <div className="main-content__page">
            <div className="main-content__page-1">
               <Home />
            </div>
            <div className="main-content__page-2"></div>
            <div className="main-content__page-3"></div>
         </div>
      </div>
   );
};

export default MainPage;
