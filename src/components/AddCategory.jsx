import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={onSubmit} aria-label="form">
      <input type="text"
             className="border border-[#64ffda] rounded px-3 py-2 text-[#ccd6f6] outline-none bg-transparent mb-16 w-full placeholder-[#ccd6f6]"
             placeholder="Search gifs..." value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};