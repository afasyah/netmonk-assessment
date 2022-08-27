import React from 'react';

export const Home = () => {
   return (
      <div className="home__wrapper">
         <div className="home__content">
            <h2 className="home__title">
               BOOK YOUR ULTIMATE SUSHI EXPERIENCE!
            </h2>
            <p className="home__subtitle">Save 50% on your first visit*</p>
            <p className="home__mini-subtitle">*Terms & condition applied.</p>
         </div>

         <div className="home__actions">
            <button className="button button__primary button--large">
               Book Now
            </button>
         </div>
      </div>
   );
};

export default Home;
