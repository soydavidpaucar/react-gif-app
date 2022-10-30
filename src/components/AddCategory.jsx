import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.trim().length > 0) {
      onNewCategory(inputValue.trim());
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text"
             className="border border-[#64ffda] rounded px-3 py-2 text-[#ccd6f6] outline-none bg-transparent"
             placeholder="Search gifs..." value={inputValue} onChange={handleInputChange} />
    </form>
  );
};