import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import axios from '@/core/services/axios';
import fetchData from '@/core/hooks/fetchData';
import { MOTION_CONTAINER, MOTION_ITEM } from '@/utilities/constant';
import { API, OWNER_DATA } from '@/utilities/constant';
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
   const [modalBookingLoading, setModalBookingLoading] = useState(false);
   const { data: posts, error: postError } = fetchData(API.POSTS);
   const { data: users, error: userError } = fetchData(API.USERS);

   useEffect(() => {
      const queries = location.search
         .split('?')
         .slice(1)
         .map((q) => {
            const splittedQuery = q.split('=');

            return { [splittedQuery[0]]: splittedQuery[1] };
         });

      if (queries)
         queries.map((query) => {
            if (query.form === 'true') toggleBookingModal(true);
         });
   }, []);

   const toggleBookingModal = (val: boolean) => {
      setModalBookingActive(val);
   };

   const onSubmitBooking = async (payload: string) => {
      setModalBookingLoading(true);

      try {
         const { data } = await axios.post(API.POSTS, {
            id: 101,
            title: 'Booking for Afasyah',
            body: payload,
            userId: OWNER_DATA.id,
         });

         posts.push(data);
         setModalBookingLoading(false);
         toggleBookingModal(false);
      } catch (error) {
         console.error(error);
         setModalBookingLoading(false);
      }
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

            <div className="post booking-list">
               {postError && postError}
               {userError && userError}
               {posts && users && (
                  <motion.ul
                     variants={MOTION_CONTAINER}
                     initial="hidden"
                     animate="show"
                     className="post-bubble__wrapper">
                     {posts
                        .filter(
                           (post: PostInterface, index: number) =>
                              index === 0 ||
                              index === 10 ||
                              index === 20 ||
                              index === 30 ||
                              index === 99 ||
                              index === posts.length - 1,
                        )
                        .map((post: PostInterface, i: number) => (
                           <motion.div variants={MOTION_ITEM} key={post.id}>
                              <PostBubble
                                 post={Object.assign({}, post, { index: i })}
                                 user={
                                    post.userId === 666
                                       ? OWNER_DATA
                                       : users.find(
                                            (data: UserInterface) =>
                                               data.id === post.userId,
                                         )
                                 }
                              />
                           </motion.div>
                        ))}
                  </motion.ul>
               )}
            </div>
         </div>

         <ModalBooking
            active={modalBookingActive}
            loading={modalBookingLoading}
            closeModal={() => toggleBookingModal(false)}
            onSubmit={onSubmitBooking}
         />
      </Main>
   );
};

export default BookingList;
