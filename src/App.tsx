import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Experience from '@/core/classes/Experience/Experience';

import Navbar from '@/layouts/Navbar';

export const App = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const experience = new Experience(canvasRef.current);
   }, []);

   return (
      <div className="App">
         {/* <Navbar /> */}

         <div className="main-content">
            <canvas ref={canvasRef} className="webgl"></canvas>

            {/* <Outlet /> */}
         </div>
      </div>
   );
};

export default App;
