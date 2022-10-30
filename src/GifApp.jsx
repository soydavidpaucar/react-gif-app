import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  
  const handleAddNewCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  
  return (
    <main className="bg-[#0a192f] p-[60px]">
      <h1 className="text-[#ccd6f6] text-4xl mb-5">GifApp</h1>
      
      <AddCategory onNewCategory={handleAddNewCategory} />
      
      <ol>
        {categories.map((category) => (
          <li key={category} className="text-[#8892b0]">{category}</li>
        ))}
      </ol>
    </main>
  );
};
