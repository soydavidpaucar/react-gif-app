import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs.js';

afterEach(cleanup);

vi.mock('../../src/hooks/useFetchGifs.js');

describe('test GifGrid component', () => {
  
  const category = 'Rafael Nadal';
  
  it('should display the loading text initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });
    
    render(<GifGrid category={category} />);
    
    const loadingText = screen.getByText('Loading...').innerHTML;
    const categoryInComponent = screen.getByText(category).innerHTML;
    
    expect(loadingText).toBe('Loading...');
    expect(categoryInComponent).toBe(category);
  });
  
  it('should display the items when the images are loaded', () => {
    const gifs = [
      {
        id: '1',
        title: 'Test Title 1',
        url: 'https://test.url/1'
      },
      {
        id: '2',
        title: 'Test Title 2',
        url: 'https://test.url/2'
      }
    ];
    
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });
    
    render(<GifGrid category={category} />);
    
    const imagesRendered = screen.getAllByRole('img');
    
    expect(screen.queryByText('Loading...')).toBeNull();
    expect(imagesRendered.length).toBe(gifs.length);
  });
});