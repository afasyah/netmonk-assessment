import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Experience from '@/core/classes/Experience/Experience';

import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

export const App = () => {
   const [loading, setLoading] = useState(false);
   const loadingEl = document.querySelector('.loading-overlay') as HTMLElement;
   const canvasRef = useRef<HTMLCanvasElement>(null);

   window.addEventListener('asset-loaded', () => {
      loadingEl.style.opacity = '0';
      loadingEl.style.visibility = 'none';

      window.setTimeout(() => {
         loadingEl.style.display = 'none';
         setLoading(false);
      }, 250);
   });

   useEffect(() => {
      const experience = new Experience(canvasRef.current);
   }, []);

   return (
      !loading && (
         <div className="App">
            <Navbar />

            <div className="main-content__wrapper">
               <canvas ref={canvasRef} className="webgl"></canvas>

               <Outlet />
            </div>

            <Footer />
         </div>
      )
   );
};

export default App;
