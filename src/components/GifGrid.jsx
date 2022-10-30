import { GifItem } from './';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({category}) => {
  const {images, isLoading} = useFetchGifs(category);
  
  return (
    <>
      <h3 className="text-[#ccd6f6] text-4xl mb-2 font-semibold">{category}</h3>
      
      {isLoading && <p className="text-[#ccd6f6] text-1xl">Loading...</p>}
      
      <div className="text-[#8791af] mb-12 flex flex-row flex-wrap justify-center">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};