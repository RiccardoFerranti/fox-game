import { render, screen } from '@testing-library/react';

import Board, { IBoardProps } from '../Board';

describe('Board', () => {
  const mockedHandleClickImage = jest.fn();

  const mockedProps: IBoardProps = {
    images: [
      { name: 'cat', url: 'https:www.cat.com' },
      { name: 'cat', url: 'https:www.cat.com' },
      { name: 'cat', url: 'https:www.cat.com' },
      { name: 'cat', url: 'https:www.cat.com' },
      { name: 'dog', url: 'https:www.dog.com' },
      { name: 'dog', url: 'https:www.dog.com' },
      { name: 'dog', url: 'https:www.dog.com' },
      { name: 'dog', url: 'https:www.dog.com' },
      { name: 'fox', url: 'https:www.fox.com' }
    ],
    handleClickImage: mockedHandleClickImage,
  };

  const renderView = (props: IBoardProps = mockedProps) => render(<Board {...props} />);

  it('should render properly all the images passed', () => {
    renderView();

    expect(screen.getAllByTestId('cat').length).toBe(4);
    expect(screen.getAllByTestId('dog').length).toBe(4);
    expect(screen.getAllByTestId('fox').length).toBe(1);
  });
});
