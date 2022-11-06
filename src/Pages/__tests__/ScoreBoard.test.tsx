import { screen } from '@testing-library/react';

import ScoreBoard from '../ScoreBoard';

import { IGameState } from '../../redux/game/game.slice';

import renderWithProvider, {
  generateMockedState,
  generateResults,
  mockedDateHumanReadble,
  mockedRecordContext,
  routerConfig
} from '../../../testUtils';

describe('ScoreBoard', () => {
  let mockedStore: IGameState;
  
  const renderView = (store: IGameState = mockedStore) => renderWithProvider(
    <ScoreBoard />,
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
  });

  it('should render properly the scoreboard title', () => {
    renderView();
    expect(screen.getByText('ScoreBoard')).toBeInTheDocument();
  });
  
  it('should render properly the headings of the scoreboard', () => {
    renderView();

    expect(screen.getByText(/rank/i)).toBeInTheDocument();
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
  });
  
  it('should render the empty scoreboard when no players played', () => {
    renderView();

    Array.from(Array(7).keys()).forEach((id: number) => {
      expect(screen.getByTestId(`rank-${id}`).textContent).toBe(String(id + 1));
      expect(screen.getByTestId(`name-${id}`)).toBeEmptyDOMElement();
      expect(screen.getByTestId(`date-${id}`)).toBeEmptyDOMElement();
      expect(screen.getByTestId(`score-${id}`)).toBeEmptyDOMElement();
    })
  });

  it('should render the scoreboard with the results when at least on player played', () => {
    mockedStore.scoreBoard = generateResults(7);
    renderView();

    Array.from(Array(7).keys()).forEach((id: number) => {
      expect(screen.getByTestId(`rank-${id}`).textContent).toBe(String(id + 1));
      expect(screen.getByTestId(`name-${id}`).textContent).toBe(`test user ${id}`);
      expect(screen.getByTestId(`date-${id}`).textContent).toBe(mockedDateHumanReadble);
      expect(screen.getByTestId(`score-${id}`).textContent).toBe(String(id * 10));
    })
  });
});
