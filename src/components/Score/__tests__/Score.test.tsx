import { render, screen } from '@testing-library/react';

import Score, { IScoreProps } from '../Score';

describe('Score', () => {
  const mockedProps: IScoreProps = {
    score: 1,
  };

  const renderView = (props: IScoreProps = mockedProps) => render(<Score {...props} />);

  it('should render properly the score', () => {
    renderView();
    expect(screen.getByText(mockedProps.score!)).toBeInTheDocument();
  });
});
