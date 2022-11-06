import { act, screen } from '@testing-library/react';
import renderWithProvider, { generateMockedState, mockedRecordContext, routerConfig } from '../../../../testUtils';
import { DEFAULT_TIMER } from '../../../consts/general';
import { IGameState } from '../../../redux/game/game.slice';

import Timer, { ITimerProps } from '../Timer';

describe('Timer', () => {
  let mockedProps: ITimerProps;
  let mockedStore: IGameState;

  const renderView = (
    props: ITimerProps = mockedProps,
    store: IGameState = mockedStore,
    recordContext = mockedRecordContext
  ) => renderWithProvider(
    <Timer {...props} />,
    routerConfig,
    recordContext,
    {
      preloadedState: {
        game: store,
      },
    }
  );

  beforeEach(() => {
    mockedRecordContext.record.loading = false;
    mockedProps = { start: true };
    mockedStore = generateMockedState();
  });

  it('should render properly the timer with the default time of `30` seconds', () => {
    renderView();
    expect(screen.getByText(`Timer left: ${DEFAULT_TIMER}`)).toBeInTheDocument();
  });
  
  it('should render properly the timer with the custom timeof 5 seconds passed', () => {
    mockedStore.timer = 'running';
    mockedProps.startTimer = 5;
    renderView();

    expect(screen.getByText('Timer left: 5')).toBeInTheDocument();
  });

  it('should render properly the timer with after that 20 seconds are elapsed', () => {
    mockedStore.timer = 'running';
    jest.useFakeTimers(); 
    renderView();
    act(() => {
      jest.advanceTimersByTime(20000);
    });

    expect(screen.getByText('Timer left: 10')).toBeInTheDocument();
  });
});
