import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MOTION_CONTAINER } from '@/utilities/constant';

export const MainPage = ({ children }: React.PropsWithChildren) => {
   const location = useLocation();
   const navigate = useNavigate();

   return (
      <div className="main-content">
         <div className="main-content__navigation">
            <motion.button
               variants={MOTION_CONTAINER}
               initial="hidden"
               animate="show"
               className={`go-back ${
                  location.pathname === '/' && 'go-back--hidden'
               }`}
               onClick={() => navigate(-1)}>
               <img src="/images/arrow-back.png" width={24} />
               <span>Go Back</span>
            </motion.button>
         </div>

         <div className="main-content__page">{children}</div>
      </div>
   );
};

export default MainPage;
