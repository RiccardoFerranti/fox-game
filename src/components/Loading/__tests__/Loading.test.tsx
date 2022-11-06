import { render, screen } from '@testing-library/react';

import Loading, { ILoadingProps } from '../Loading';

describe('Loading', () => {
  const mockedProps: ILoadingProps = {
    message: 'test loading message'
  };

  const renderView = (props: ILoadingProps = mockedProps) => render(<Loading {...props} />);

  it('should render properly the loading message', () => {
    renderView();
    expect(screen.getByText(`${mockedProps.message}...`)).toBeInTheDocument();
  });

  it('should render properly the spinner icon', () => {
    renderView();
    expect(screen.getByTestId('spinner-icon')).toBeInTheDocument();
  });
});
