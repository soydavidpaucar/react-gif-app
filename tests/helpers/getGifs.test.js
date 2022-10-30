import { cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { getGifs } from '../../src/helpers/getGifs.js';

afterEach(cleanup);

describe('tests on getGifs helper', () => {
  it('should return an array of gifs', async () => {
    const gifs = await getGifs('One Punch');
    
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toStrictEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
  
  it('should return an empty array if no category is provided', async () => {
    const gifs = await getGifs('');
    
    expect(gifs.length).toBe(0);
  });
});