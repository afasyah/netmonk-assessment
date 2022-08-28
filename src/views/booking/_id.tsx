import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import axios from '@/core/services/axios';

import { API } from '@/utilities/constant';
import { MOTION_CONTAINER, MOTION_ITEM } from '@/utilities/constant';

import Main from '@/layouts/Main';

export const Booking = () => {
   const params = useParams();
   const [post, setPost] = useState(null);
   const [comments, setComments] = useState(null);
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   const [commentLoading, setCommentLoading] = useState(true);

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
                  setError(err);
                  setLoading(false);
               });

            axios
               .get(`${API.POSTS}/${res.data.id}/${API.COMMENTS}`)
               .then((res) => {
                  setComments(res.data);
                  setCommentLoading(false);
               })
               .catch((err) => {
                  setError(err);
                  setCommentLoading(false);
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
                              {user.name.length > 16
                                 ? user.name.slice(0, 16) + '...'
                                 : user.name}
                           </motion.h2>
                           <motion.p variants={MOTION_ITEM}>
                              a week ago
                           </motion.p>
                        </div>
                        <img
                           src={`/images/pp-${user.id}.png`}
                           alt="pp"
                           width={84}
                           height={84}
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

               <div className="comment">
                  {commentLoading && 'Fetching comments...'}
                  {comments && (
                     <motion.div
                        variants={MOTION_CONTAINER}
                        initial="hidden"
                        animate="show">
                        {comments.map((comment: any) => (
                           <motion.div
                              key={comment.id}
                              variants={MOTION_ITEM}
                              className="comment-item">
                              <div className="comment-item__content">
                                 <p className="comment-item__title">
                                    {comment.email}
                                 </p>

                                 <p className="comment-item__body">
                                    {comment.body}
                                 </p>
                              </div>
                           </motion.div>
                        ))}
                     </motion.div>
                  )}
               </div>
            </div>
         )}
      </Main>
   );
};

export default Booking;
