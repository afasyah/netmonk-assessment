export const NODE_ENV = process.env.NODE_ENV;

export const BASE_URL = process.env.API_URL;

export const API = {
   POSTS: `posts`,
   COMMENTS: `comments`,
   USERS: `users`,
};

export const MOTION_CONTAINER = {
   hidden: { x: -6, opacity: 0 },
   show: {
      x: 0,
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
};

export const MOTION_ITEM = {
   hidden: { x: -6, opacity: 0 },
   show: { x: 0, opacity: 1 },
};

export default {
   NODE_ENV,
   BASE_URL,
   API,
   MOTION_CONTAINER,
   MOTION_ITEM,
};
