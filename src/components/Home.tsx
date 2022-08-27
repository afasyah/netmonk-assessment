import React from 'react';

export const Home = () => {
   return (
      <div className="content__wrapper">
         <div className="content">
            <h2 className="content__title">
               BOOK YOUR ULTIMATE SUSHI EXPERIENCE!
            </h2>
            <p className="content__subtitle">Save 50% on your first visit*</p>
            <p className="content__mini-subtitle">
               *Terms & condition applied.
            </p>
         </div>

         <div className="content__actions">
            <button className="button button--color-primary button--large">
               Book Now
            </button>
         </div>
      </div>
   );
};

export default Home;
