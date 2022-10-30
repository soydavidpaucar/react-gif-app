export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${category}&limit=7`;
  const response = await fetch(url);
  const {data} = await response.json();
  
  return data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.original.url
    };
  });
};