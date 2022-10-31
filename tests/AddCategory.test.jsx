import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../src/components';

afterEach(cleanup);

describe('test AddCategory component', () => {
  it('should change the value of the input', () => {
    const onNewCategory = vi.fn();
    
    render(<AddCategory onNewCategory={onNewCategory} />);
    
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, {target: {value: 'Hello World'}});
    
    expect(input.value).toBe('Hello World');
  });
  
  it('should call onNewCategory if the input is not empty', () => {
    const inputValue = 'Hello World';
    const onNewCategory = vi.fn();
    
    render(<AddCategory onNewCategory={onNewCategory} />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByLabelText('form');
    
    fireEvent.change(input, {target: {value: 'Hello World'}});
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  
  it('should not call onNewCategory if the input is empty', () => {
    const onNewCategory = vi.fn();
    
    render(<AddCategory onNewCategory={onNewCategory} />);
    
    const form = screen.getByLabelText('form');
    
    fireEvent.submit(form);
    
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});