import React from 'react';

export const MainPage = ({ children }: React.PropsWithChildren) => {
   return (
      <div className="main-content">
         <div className="main-content__navigation">
            <button className={`go-back ${true && 'go-back--hidden'}`}>
               <img src="/images/arrow-back.png" width={24} />
               <span>Go Back</span>
            </button>
         </div>

         <div className="main-content__page">{children}</div>
      </div>
   );
};

export default MainPage;
