import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  
  const handleAddNewCategory = (newCategory) => {
    if (!categories.map(category => category.toLowerCase()).includes(newCategory.toLowerCase())) {
      setCategories([newCategory, ...categories]);
    }
  };
  
  return (
    <main className="bg-[#0a192f] p-[60px] min-h-screen">
      <h1 className="text-[#ccd6f6] text-6xl mb-5 font-black">GifApp</h1>
      
      <AddCategory onNewCategory={handleAddNewCategory} />
      
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </main>
  );
};
