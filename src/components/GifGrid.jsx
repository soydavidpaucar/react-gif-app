import { useEffect, useState } from 'react';

import { getGifs } from '../helpers/getGifs.js';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    getGifs(category).then(setImages);
  }, []);
  
  return (
    <>
      <h3 className="text-[#ccd6f6] text-4xl mb-2">{category}</h3>
      <div className="text-[#8791af] mb-12 flex flex-row flex-wrap justify-center">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};