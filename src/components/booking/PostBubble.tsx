import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
   PostInterface,
   UserInterface,
} from '@/core/ts/interfaces/DataInterfaces';

interface PostBubblePropInterface {
   post: PostInterface;
   user: UserInterface;
}

export const PostBubble = ({ post, user }: PostBubblePropInterface) => {
   const navigate = useNavigate();
   const [hoverState, setHoverState] = useState(false);
   const [cardPosition, setCardPosition] = useState(null);

   const toggleHover = (
      _e: React.MouseEvent<HTMLLIElement, MouseEvent>,
      val: boolean,
   ) => {
      const position = {
         x: 0,
         y: 0,
      };

      if (val) {
         position.x = _e.clientX;
         position.y = _e.clientY;
         setCardPosition(position);
      }

      setHoverState(val);
   };

   return (
      <li
         key={post.id}
         className={`post-bubble post-bubble--order-${post.index + 1}`}
         onMouseEnter={(_e) => toggleHover(_e, true)}
         onMouseLeave={(_e) => toggleHover(_e, false)}>
         <img
            src={`/images/pp-${user.id}.png`}
            alt="pp"
            width={64}
            className="post-bubble__image"
         />

         <div
            className={`post-bubble__card ${
               hoverState && 'post-bubble__card--active'
            }`}
            style={
               cardPosition && {
                  left: cardPosition.x,
                  top: cardPosition.y,
               }
            }>
            <div className="post-bubble__card-title">{user.name}</div>
            <div className="post-bubble__card-overview">
               {post.body.length > 130
                  ? post.body.slice(0, 130) + '...'
                  : post.body}
            </div>
            <div className="post-bubble__card-actions">
               <button
                  className="button--color-primary button--large"
                  onClick={() => navigate(`/booking/${post.id}`)}>
                  See Details
               </button>
            </div>
         </div>
      </li>
   );
};

export default PostBubble;
