import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs.js';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getGifs(category).then(setImages);
    setIsLoading(false);
  }, []);
  
  return {
    images,
    isLoading
  };
};