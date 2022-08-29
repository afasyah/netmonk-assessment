import {
   PostInterface,
   UserInterface,
   CommentInterface,
} from '@/core/ts/interfaces/DataInterfaces';

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
         staggerChildren: 0.1,
      },
   },
};

export const MOTION_ITEM = {
   hidden: { x: -6, opacity: 0 },
   show: { x: 0, opacity: 1 },
};

export const OWNER_DATA: UserInterface = {
   id: 666,
   name: 'A. D. Afasyah',
   username: 'afasyah',
   email: 'alifya.difa707@gmail.com',
   phone: '1-770-736-8031',
   website: 'https://www.linkedin.com/in/adafasyah/',
};

export const NEW_POST: PostInterface = {
   id: 101,
   userId: 666,
   title: 'Tribute to Kresselyn',
   body: 'This website is a tribute to my dear friend, Kresselyn. May god bless her undefined existence.',
};

export const NEW_POST_COMMENTS: CommentInterface[] = [
   {
      postId: 101,
      id: 666,
      name: 'A. D. Afasyah',
      email: 'A. D. Afasyah',
      body: 'Thank you for your kind support and motivation.',
   },
];

export default {
   NODE_ENV,
   BASE_URL,
   API,
   MOTION_CONTAINER,
   MOTION_ITEM,
   OWNER_DATA,
   NEW_POST,
};
