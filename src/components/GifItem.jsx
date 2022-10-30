export const GifItem = ({title, url}) => {
  return (
    <div className="items-center flex justify-center flex-col bg-white rounded-md mb-[20px] h-[0%] mr-[20px]">
      <img src={url} alt={title} className="w-full rounded-t-md"/>
      <p className="text-[#0a192f]">{title}</p>
    </div>
  );
};