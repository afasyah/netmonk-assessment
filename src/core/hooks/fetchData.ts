import { useEffect, useState } from 'react';

import axios from '../services/axios';

const fetchData = (url: string) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const abortCont = new AbortController();

      axios
         .get(url, { signal: abortCont.signal })
         .then((res) => {
            setData(res.data);
            setError(null);
            setLoading(false);
         })
         .catch((error) => {
            if (error.name !== 'AbortError') {
               setLoading(false);
               setError(error);
            }
         });

      return () => abortCont.abort();
   }, [url]);

   return { data, error, loading };
};

export default fetchData;
