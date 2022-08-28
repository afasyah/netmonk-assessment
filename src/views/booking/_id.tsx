import React from 'react';
import { useParams } from 'react-router-dom';

import fetchData from '@/core/hooks/fetchData';
import { API } from '@/utilities/constant';

import Main from '@/layouts/Main';

export const Booking = () => {
   const params = useParams();
   const {
      data: post,
      error: postError,
      loading: postLoading,
   } = fetchData(`${API.POSTS}/${params.id}`);

   return (
      <Main>
         <h1>{params.id}</h1>
      </Main>
   );
};

export default Booking;
