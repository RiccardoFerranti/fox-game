import { TRootState } from '../game.reducer';
import { IScoreBoard, TTimer } from './game.slice';

export const gameSelectorUsername = (state: TRootState): string => state.game.username;
export const gameSelectorScoreBoard = (state: TRootState): Array<IScoreBoard> => state.game.scoreBoard;
export const gameSelectorTimer = (state: TRootState): TTimer => state.game.timer;
export const gameSelectorMusic = (state: TRootState): boolean => state.game.music;
