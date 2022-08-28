import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import fetchData from '@/core/hooks/fetchData';
import { MOTION_CONTAINER, MOTION_ITEM } from '@/utilities/constant';
import { API } from '@/utilities/constant';
import {
   PostInterface,
   UserInterface,
} from '@/core/ts/interfaces/DataInterfaces';

import Main from '@/layouts/Main';
import PostBubble from '@/components/booking/PostBubble';
import ModalBooking from '@/components/modals/ModalBooking';

export const BookingList = () => {
   const location = useLocation();
   const [modalBookingActive, setModalBookingActive] = useState(false);
   const {
      data: posts,
      error: postError,
      loading: postLoading,
   } = fetchData(API.POSTS);
   const {
      data: users,
      error: userError,
      loading: userLoading,
   } = fetchData(API.USERS);

   useEffect(() => {
      const queries = location.search
         .split('?')
         .slice(1)
         .map((q) => {
            const splittedQuery = q.split('=');

            return { [splittedQuery[0]]: splittedQuery[1] };
         });

      queries.map((query) => {
         if (query.form === 'true') toggleBookingModal(true);
      });
   }, []);

   const toggleBookingModal = (val: boolean) => {
      setModalBookingActive(val);
   };

   const onSubmitBooking = (payload: any) => {
      //
   };

   return (
      <Main>
         <div className="content__wrapper">
            <motion.div
               variants={MOTION_CONTAINER}
               initial="hidden"
               animate="show">
               <div className="content">
                  <motion.div variants={MOTION_ITEM} />
                  <motion.h2 variants={MOTION_ITEM} className="content__title">
                     BOOKING LIST
                  </motion.h2>
                  <motion.p
                     variants={MOTION_ITEM}
                     className="content__subtitle">
                     Here are some several list of people that booked on our
                     grand opening!
                  </motion.p>
               </div>
            </motion.div>

            <div className="post">
               {postError && postError}
               {userError && userError}
               {posts && users && (
                  <motion.ul
                     variants={MOTION_CONTAINER}
                     initial="hidden"
                     animate="show"
                     className="post-bubble__wrapper">
                     {[
                        posts[0],
                        posts[10],
                        posts[20],
                        posts[30],
                        posts[posts.length - 1],
                     ].map((post: PostInterface, i: number) => (
                        <motion.div variants={MOTION_ITEM} key={post.id}>
                           <PostBubble
                              post={Object.assign({}, post, { index: i })}
                              user={users.find(
                                 (data: UserInterface) =>
                                    data.id === post.userId,
                              )}
                           />
                        </motion.div>
                     ))}
                  </motion.ul>
               )}
            </div>
         </div>

         <ModalBooking
            active={modalBookingActive}
            closeModal={() => toggleBookingModal(false)}
            onSubmit={onSubmitBooking}
         />
      </Main>
   );
};

export default BookingList;
