import { screen } from '@testing-library/react';

import Error, { IErrorProps } from '../Error';

import renderWithProvider from '../../../../testUtils';

describe('Error', () => {
  const mockedProps: IErrorProps = {
    error: 'test error',
  };

  const renderView = (props: IErrorProps = mockedProps) => renderWithProvider(<Error {...props} />);

  it('should render the `error` message properly', () => {
    renderView();
    expect(screen.getByText(`${mockedProps.error}`)).toBeInTheDocument();
  });
});
