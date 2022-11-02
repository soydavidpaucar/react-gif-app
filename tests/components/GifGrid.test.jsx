import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';

afterEach(cleanup);

describe('test GifGrid component', () => {
  
  const category = 'Rafael Nadal';
  
  it('should display the loading text initially', () => {
    render(<GifGrid category={category} />);
    
    const loadingText = screen.getByText('Loading...').innerHTML;
    const categoryInComponent = screen.getByText(category).innerHTML;
    
    expect(loadingText).toBe('Loading...');
    expect(categoryInComponent).toBe(category);
  });
});