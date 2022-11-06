import {
  gameSelectorUsername,
  gameSelectorScoreBoard,
  gameSelectorTimer,
  gameSelectorMusic
} from '../game.selector';

import { TRootState } from '../../game.reducer';

import { generateMockedState, generateResults } from '../../../../testUtils';

describe('Game Selectors', () => {  
  const state: TRootState = { game: generateMockedState() };

  it('should return the correct state for username', () => {
    expect(gameSelectorUsername(state)).toBe(state.game.username);
  });
  
  it('should return the correct state for scoreBoard', () => {
    const results = generateResults(2);
    const mockedState = { game: generateMockedState('test', results) };
    
    expect(gameSelectorScoreBoard(mockedState)).toBe(results);
  });
  
  it('should return the correct state for timer', () => {
    let mockedState;

    mockedState = { game: generateMockedState('test', [], 'idle') };
    expect(gameSelectorTimer(mockedState)).toBe(mockedState.game.timer);

    mockedState = { game: generateMockedState('test', [], 'running') };
    expect(gameSelectorTimer(mockedState)).toBe(mockedState.game.timer);
    
    mockedState = { game: generateMockedState('test', [], 'end') };
    expect(gameSelectorTimer(mockedState)).toBe(mockedState.game.timer);
  });

  it('should return the correct state for music', () => {
    let mockedState;

    mockedState = { game: generateMockedState('test', [], 'idle', true) };
    expect(gameSelectorMusic(mockedState)).toBe(mockedState.game.music);

    mockedState = { game: generateMockedState('test', [], 'running', false) };
    expect(gameSelectorMusic(mockedState)).toBe(mockedState.game.music);
  });
});
