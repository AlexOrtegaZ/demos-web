import { useRef, useEffect, useState } from 'react';

const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ ...state, loading: true }))

    const getData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (isMounted.current) {
          setState(state => ({ ...state, loading: false, data: json }));
        }
      } catch (err) {
        setState(state => ({ 
          ...state, 
          loading: false,
          error: 'Hubo un error al obtener los datos.' 
        }))
      }
    };

    getData();
  }, [url]); 

  return state;
};

export default useFetch;