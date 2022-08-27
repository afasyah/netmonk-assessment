import React from 'react';

export const Footer = () => (
   <footer className="footer__wrapper">
      <div className="footer">
         {
            // eslint-disable-next-line prefer-spread
            Array.apply(null, Array(5)).map((val: null, i: number) => (
               <h2 key={i} className="footer__title">
                  SHUSSY!
               </h2>
            ))
         }
      </div>
   </footer>
);

export default Footer;
