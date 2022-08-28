import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from '@/core/services/axios';

import fetchData from '@/core/hooks/fetchData';
import { API } from '@/utilities/constant';
import { MOTION_CONTAINER, MOTION_ITEM } from '@/utilities/constant';

import Main from '@/layouts/Main';

export const Booking = () => {
   const params = useParams();
   const [loading, setLoading] = useState(true);
   const [post, setPost] = useState(null);
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);

   useEffect(() => {
      axios
         .get(`${API.POSTS}/${params.id}`)
         .then((res) => {
            setPost(res.data);

            axios
               .get(`${API.USERS}/${res.data.userId}`)
               .then((res) => {
                  setUser(res.data);
                  setLoading(false);
               })
               .catch((err) => {
                  setLoading(false);
               });
         })
         .catch((err) => {
            setError(err);
            setLoading(false);
         });
   }, []);

   return (
      <Main>
         {error && error}
         {loading && 'Fetching data...'}
         {post && user && (
            <div className="content__wrapper detail">
               <motion.div
                  variants={MOTION_CONTAINER}
                  initial="hidden"
                  animate="show">
                  <div className="content detail">
                     <motion.div variants={MOTION_ITEM} />
                     <div className="content__profile">
                        <div>
                           <motion.h2
                              variants={MOTION_ITEM}
                              className="content__title">
                              {user.name}
                           </motion.h2>
                           <motion.p variants={MOTION_ITEM}>
                              a week ago
                           </motion.p>
                        </div>
                        <img
                           src={`/images/pp-${user.id}.png`}
                           alt="pp"
                           width={96}
                        />
                     </div>
                  </div>
               </motion.div>

               <div className="post">
                  <motion.div
                     variants={MOTION_CONTAINER}
                     initial="hidden"
                     animate="show">
                     <motion.p variants={MOTION_ITEM} className="post__body">
                        {post.body}
                     </motion.p>
                  </motion.div>
               </div>
            </div>
         )}
      </Main>
   );
};

export default Booking;
