import { combineReducers } from '@reduxjs/toolkit';
import { gameSlice } from './game/game.slice';

export const rootReducer = combineReducers({
  game: gameSlice.reducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
