import { render, screen } from '@testing-library/react';

import AnimatedBackground from '../AnimatedBackground';

describe('AnimatedBackground', () => {
  const renderView = () =>  render(<AnimatedBackground />);
  
  it('should render all the 5 clouds properly', () => {
    renderView();
    expect(screen.getAllByTestId('cloud').length).toBe(5);
  });
});
