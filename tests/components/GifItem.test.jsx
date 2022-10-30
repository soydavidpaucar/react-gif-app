import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, test } from 'vitest';

import { GifItem } from '../../src/components';

/* Cleaning up the DOM after each test. */
afterEach(cleanup);

describe('test GifItem component', () => {
  const title = 'Test Title';
  const url = 'https://test.url/';
  
  it('should match GifItem component with Snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    
    expect(container).toMatchSnapshot();
  });
  
  it('should display the title, url and alt attributes', () => {
    render(<GifItem title={title} url={url} />);
    
    const {src, alt} = screen.getByRole('img');
    
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  
  it('should display the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    
    const titleElement = screen.getByText(title).innerHTML;
    expect(titleElement).toBe(title);
  });
});
