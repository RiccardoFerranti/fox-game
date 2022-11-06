import { FC, ReactNode, ReactElement, PropsWithChildren } from 'react';

import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components'
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit'
import type { RenderOptions } from '@testing-library/react'

import Theme from './src/Theme';
import { rootReducer, TRootState } from './src/redux/game.reducer';
import { IGameState, IScoreBoard, TTimer } from './src/redux/game/game.slice';
import { TDictionary } from './src/commonTypes';
import { RecordProvider } from './src/RecordContext';
import { IRecordImages } from './src/Layout/types';
import { NUMBER_CATS_FETCHED, NUMBER_DOGS_FETCHED, NUMBER_FOXES_FETCHED } from './src/consts/general';

export const routerConfig = {
  isRouter: true,
  location: {
    path: '/'
  }
}

export const mocks = {
  Audio: {
    pause: jest.fn(),
    play: jest.fn(),
  },
}

export const generateRecordImages = () => {
  const images: IRecordImages = {
    cats: [],
    dogs: [],
    foxes:[],
  };

  Array.from(Array(NUMBER_CATS_FETCHED).keys()).forEach((id: number) => {
    const url = `https://www.test${id}.com`;
    images.cats.push({ name: 'cat', url });
  });

  Array.from(Array(NUMBER_DOGS_FETCHED).keys()).forEach((id: number) => {
    const url = `https://www.test${id}.com`;
    images.dogs.push({ name: 'dog', url });
  });

  Array.from(Array(NUMBER_FOXES_FETCHED).keys()).forEach((id: number) => {
    const url = `https://www.test${id}.com`;
    images.foxes.push({ name: 'fox', url });
  });

  return images;
}

export const mockedDate = new Date("2022-11-03");
export const mockedDateHumanReadble = '2022, Nov 3';

export const generateResults = (results: number) => {
  if (results === 0) return [];

  return Array.from(Array(results).keys()).map((id: number) => ({
    name: `test user ${id}`,
    date: mockedDateHumanReadble,
    score: id * 10,
  }));
}

export const generateMockedState = (
  username = 'TestUser',
  scoreBoard: Array<IScoreBoard> = [],
  timer: TTimer = 'idle',
  music = false,
): IGameState => ({
  username,
  scoreBoard,
  timer,
  music,
})

interface IRouterLocation {
  path: string,
}

export const withRouter = (children: ReactNode | ReactNode[], location: IRouterLocation): JSX.Element => {
 const path = location.path;

 return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={children} />
        <Route path="/welcome" element={children} />
        <Route path="/game" element={children} />
        <Route path="/score" element={children} />
        <Route path="*" element={children} />
      </Routes>
    </MemoryRouter>
  )
}

export const setupStore = (preloadedState?: PreloadedState<TRootState>): any => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

type TRecordProviderChildren = React.ReactNode | React.ReactNode[];

interface IRecordProvider {
  children: TRecordProviderChildren,
  recordContext: TDictionary | undefined,
}

export const RecordProviderWrapper = ({ children, recordContext }: IRecordProvider): any => {
  if (!recordContext?.withRecordContext) {
    return children;
  }

  return <RecordProvider record={recordContext.record}>{children}</RecordProvider>;
};

interface IMockedRecordContext {
  withRecordContext: boolean,
  record: TDictionary,
}

export const mockedRecordContext: IMockedRecordContext = {
  withRecordContext: true,
  record: {},
};

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<Partial<TRootState>>,
  store?: ReturnType<typeof setupStore>,
}

const renderWithProvider = (
  ui: ReactElement,
  {
    isRouter = false,
    location = { path: '/' },
  } = {},
  recordContext: TDictionary | undefined = undefined,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: IExtendedRenderOptions = {}
): any => {

  const Wrapper: FC<{ children: PropsWithChildren<any>}> = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <RecordProviderWrapper recordContext={recordContext}>
          {isRouter ? withRouter(children as ReactNode[], location) : children}
        </RecordProviderWrapper>
      </ThemeProvider>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
};

export default renderWithProvider;
