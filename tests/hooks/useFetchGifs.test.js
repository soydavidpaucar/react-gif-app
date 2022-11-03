import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks/useFetchGifs.js';

afterEach(cleanup);

describe('test useFetchGifs custom hook', () => {
  
  const category = 'Rafael Nadal';
  
  it('should return the initial state', () => {
    const {result} = renderHook(() => useFetchGifs(category));
    const {images, isLoading} = result.current;
    
    expect(images).toStrictEqual([]);
    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
    expect(typeof isLoading).toBe('boolean');
  });
  
  it('should return an array of images and isLoading false', async () => {
    const {result} = renderHook(() => useFetchGifs(category));
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));
    
    const {images, isLoading} = result.current;
    
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBe(false);
    expect(typeof isLoading).toBe('boolean');
  });
});