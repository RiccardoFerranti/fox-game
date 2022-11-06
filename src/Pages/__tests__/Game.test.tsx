import { act, screen } from '@testing-library/react';

import Game from '../Game';

import { IGameState } from '../../redux/game/game.slice';
import { IRecordImages } from '../../Layout/types';
import useTimer from '../../hooks/useTimer';
import { DEFAULT_TIMER, ERROR_MESSAGE } from '../../consts/general';

import renderWithProvider, {
  generateMockedState,
  generateRecordImages,
  mockedRecordContext,
  routerConfig
} from '../../../testUtils';

const mockedUsedNavigate = jest.fn();

jest.mock('../../components/SoundPlayer/SoundPlayer');
jest.mock('../../hooks/useTimer');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Game', () => {
  let mockedStore: IGameState;
  const images: IRecordImages = {
    cats: [],
    dogs: [],
    foxes:[],
  };
  
  const renderView = (store: IGameState = mockedStore) => renderWithProvider(
    <Game />,
    routerConfig,
    mockedRecordContext,
    {
      preloadedState: {
        game: store,
      },
    }
  );

  beforeEach(() => {
    mockedStore = generateMockedState();
    mockedRecordContext.record.images = images;
    mockedRecordContext.record.error = false;
    mockedRecordContext.record.loading = false;
  });

  it('should render properly the `error` message', () => {
    mockedRecordContext.record.error = true;
    renderView();

    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });


  it('should render properly the `score` and the `time left`', () => {
    renderView();

    expect(screen.getByText('Score:')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText(`Timer left: ${DEFAULT_TIMER}`)).toBeInTheDocument();
  });

  it('should redirect properly to the main page with the `loading` message', () => {
    mockedRecordContext.record.loading = true;
    renderView();

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });

  it('should render properly the 9 images', () => {
    mockedRecordContext.record.images = generateRecordImages();
    renderView();

    expect(screen.getAllByTestId('cat').length).toBe(4);
    expect(screen.getAllByTestId('dog').length).toBe(4);
    expect(screen.getAllByTestId('fox').length).toBe(1);
  });
  
  it('should render properly `The time is finished` after 30 seconds are elapsed', () => {
    mockedStore.timer = 'end';
    renderView();

    expect(screen.getByText('The time is finished')).toBeInTheDocument();
  });
 
  it('should render properly the `start timer` when all the images are loaded and the starting time countdown is started', () => {
    mockedRecordContext.record.images = generateRecordImages();
    (useTimer as jest.Mock).mockReturnValue(1);
    renderView();

    expect(screen.getByText(1)).toBeInTheDocument();
  });

  it('should call properly the `navigate` function to go to the scoreboard page when the timer is over', () => {
    mockedStore.timer = 'end';
    renderView();

    jest.useFakeTimers(); 
    renderView();

    act(() => {
      jest.advanceTimersByTime(20000);
    });

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});
