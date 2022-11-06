import gameSliceReducer,
{ 
  IGameState, 
  initialState,
  setUsername,
  setScoreBoard,
  setTimerStatus,
  setMusic
} from '../game.slice';

import { generateMockedState, mockedDateHumanReadble } from '../../../../testUtils';

describe('Game state', () => {  
  it('should handle `initial state`', () => {
    const action = { type: 'unknown' }
    const expectedState = initialState;

    expect(gameSliceReducer(initialState, action)).toEqual(expectedState)
  });

  it('should handle `setUsername`', () => {
    const state: IGameState = generateMockedState();
    const action = setUsername('TestUser');
    const expectedState: IGameState = { ...state, username: 'TestUser' }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });
 
  it('should handle `setScoreBoard` when the last score has the same name, date and score', () => {
    const state: IGameState = generateMockedState();
    state.scoreBoard = [
      { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
      { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
    ]

    const action = setScoreBoard({ userName: 'TestUser1', currentDate: mockedDateHumanReadble, score: 10 });

    const expectedState: IGameState = {
      ...state,
      scoreBoard: [
        { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
      ]
    }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });
  
  it('should handle `setScoreBoard` when the last score has the same name, date and different score', () => {
    const state: IGameState = generateMockedState();
    state.scoreBoard = [
      { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
      { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
    ]

    const action = setScoreBoard({ userName: 'TestUser1', currentDate: mockedDateHumanReadble, score: 20 });

    const expectedState: IGameState = {
      ...state,
      scoreBoard: [
        { name: 'TestUser1', date: mockedDateHumanReadble, score: 20 },
        { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
      ]
    }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `setScoreBoard` when the last score has the same name, score and different date', () => {
    const state: IGameState = generateMockedState();
    state.scoreBoard = [
      { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
      { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
    ]

    const action = setScoreBoard({ userName: 'TestUser1', currentDate: '2022, Nov 10', score: 10 });

    const expectedState: IGameState = {
      ...state,
      scoreBoard: [
        { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser1', date: '2022, Nov 10', score: 10 },
      ]
    }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `setScoreBoard` when the last score has the same score, date and different name', () => {
    const state: IGameState = generateMockedState();
    state.scoreBoard = [
      { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
      { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
    ]

    const action = setScoreBoard({ userName: 'TestUser3', currentDate: mockedDateHumanReadble, score: 10 });

    const expectedState: IGameState = {
      ...state,
      scoreBoard: [
        { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser3', date: mockedDateHumanReadble, score: 10 },
      ]
    }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `setScoreBoard` when the last score has different name, score and date', () => {
    const state: IGameState = generateMockedState();
    state.scoreBoard = [
      { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
      { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
    ]

    const action = setScoreBoard({ userName: 'TestUser3', currentDate: '2022, Nov 10', score: 20 });

    const expectedState: IGameState = {
      ...state,
      scoreBoard: [
        { name: 'TestUser3', date: '2022, Nov 10', score: 20 },
        { name: 'TestUser1', date: mockedDateHumanReadble, score: 10 },
        { name: 'TestUser2', date: mockedDateHumanReadble, score: 10 },
      ]
    }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `setTimerStatus` when it is `idle`', () => {
    const state: IGameState = generateMockedState();
    const action = setTimerStatus('idle');
    const expectedState: IGameState = { ...state, timer: 'idle' }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });

  it('should handle `setTimerStatus` when it is `running`', () => {
    const state: IGameState = generateMockedState();
    const action = setTimerStatus('running');
    const expectedState: IGameState = { ...state, timer: 'running' }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });
  
  it('should handle `setTimerStatus` when it is `end`', () => {
    const state: IGameState = generateMockedState();
    const action = setTimerStatus('end');
    const expectedState: IGameState = { ...state, timer: 'end' }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });
 
  it('should handle `setMusic` when it is `true`', () => {
    const state: IGameState = generateMockedState();
    const action = setMusic(true);
    const expectedState: IGameState = { ...state, music: true }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });
  
  it('should handle `setMusic` when it is `false`', () => {
    const state: IGameState = generateMockedState();
    const action = setMusic(false);
    const expectedState: IGameState = { ...state, music: false }

    expect(gameSliceReducer(state, action)).toEqual(expectedState)
  });
});
