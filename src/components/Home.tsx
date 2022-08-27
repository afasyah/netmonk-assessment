import React from 'react';
import { motion } from 'framer-motion';

import { MOTION_CONTAINER, MOTION_ITEM } from '../utilities/constant';

export const Home = () => {
   return (
      <div className="content__wrapper">
         <motion.div
            variants={MOTION_CONTAINER}
            initial="hidden"
            animate="show">
            <div className="content">
               <motion.div variants={MOTION_ITEM} />
               <motion.h2 variants={MOTION_ITEM} className="content__title">
                  BOOK YOUR ULTIMATE SUSHI EXPERIENCE!
               </motion.h2>
               <motion.p variants={MOTION_ITEM} className="content__subtitle">
                  Save 50% on your first visit*
               </motion.p>
               <motion.p
                  variants={MOTION_ITEM}
                  className="content__mini-subtitle">
                  *Terms & condition applied.
               </motion.p>
            </div>

            <div className="content__actions">
               <motion.button
                  variants={MOTION_ITEM}
                  className="button button--color-primary button--large">
                  Book Now
               </motion.button>
            </div>
         </motion.div>
      </div>
   );
};

export default Home;
