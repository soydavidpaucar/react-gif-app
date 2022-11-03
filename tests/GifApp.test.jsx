import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { GifApp } from '../src/GifApp';

describe('test GifApp component', () => {
  it('should match GifApp component with Snapshot', () => {
    const {container} = render(<GifApp />);
    
    expect(container).toMatchSnapshot();
  });
  
  it('should add a new category', () => {
    const {container} = render(<GifApp />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByLabelText('form');
    
    fireEvent.change(input, {target: {value: 'Roger Federer'}});
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
    expect(container).toMatchSnapshot();
  });
  
  it('should not add a new category if the input is empty', () => {
    const {container} = render(<GifApp />);
    
    const form = screen.getByLabelText('form');
    
    fireEvent.submit(form);
    
    expect(container).toMatchSnapshot();
  })
  
  it('should not add a new category if the category already exists', () => {
    const {container} = render(<GifApp />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByLabelText('form');
    
    fireEvent.change(input, {target: {value: 'Roger Federer'}});
    fireEvent.submit(form);
    
    fireEvent.change(input, {target: {value: 'Roger Federer'}});
    fireEvent.submit(form);
    
    expect(input.value).toBe('');
    expect(container).toMatchSnapshot();
  })
  
});