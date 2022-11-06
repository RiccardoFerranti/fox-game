import { screen } from '@testing-library/react';

import Splash from '../Splash';

import { ERROR_MESSAGE } from '../../consts/general';

import renderWithProvider, { mockedRecordContext, routerConfig } from '../../../testUtils';

describe('Splash', () => {
  const renderView = (recordContext = mockedRecordContext) => renderWithProvider(
    <Splash />,
    routerConfig,
    recordContext,
  );

  beforeEach(() => {
    mockedRecordContext.record.loading = false;
  });

  it('should render properly the `Initializing` message', () => {
    mockedRecordContext.record.loading = true;
    renderView();

    expect(screen.getByText(/initializing.../i)).toBeInTheDocument();
    expect(screen.getByText(/click the fox as many times as you can within 30 seconds/i)).toBeInTheDocument();
  });
  
  it('should render properly the `start` button once the game finished the initialization phase', () => {
    renderView();

    expect(screen.getByText(/start/i)).toBeInTheDocument();
    expect(screen.getByText(/click the fox as many times as you can within 30 seconds/i)).toBeInTheDocument();
  });
 
  it('should render properly the `error` message', () => {
    mockedRecordContext.record.error = true;
    renderView();

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
