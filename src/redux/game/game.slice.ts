import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sortArrayNumericallyByKeyValue } from '../../helpers/sorting';

export type TTimer = 'idle' | 'running' | 'end';

export interface IScoreBoard {
  name: string,
  date: string,
  score: number,
}

export interface IGameState {
  username: string,
  scoreBoard: Array<IScoreBoard>,
  settings: {
    music: boolean,
    timer: number,
    language: string
  },
  timer: TTimer,
}

const defaultSettings = {
  music: true,
  timer: 30,
  language: 'English'
}

export const initialState: IGameState = {
  username: '',
  scoreBoard: [],
  settings: defaultSettings,
  timer: 'idle',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setScoreBoard: (state, { payload }: PayloadAction<{userName: string, currentDate: string, score: number}>) => {
      let results: Array<IScoreBoard> = JSON.parse(JSON.stringify(state.scoreBoard));

      if (state.scoreBoard.length) {
        // it checks if the last score already exist and it was done by the same player and in the same date
        results = results.filter((result: IScoreBoard) => {
          return result.name.toLocaleLowerCase() !== payload.userName.toLocaleLowerCase() 
          || result.score !== payload.score
          || result.date !== payload.currentDate;
        });
      }

      results.push({
        name: payload.userName,
        date: payload.currentDate,
        score: payload.score,
      });
      
      state.scoreBoard = sortArrayNumericallyByKeyValue<IScoreBoard>(results, 'score', 'DESC').splice(0, 7);
    },
    setTimerStatus: (state, { payload }: PayloadAction<TTimer>) => {
      state.timer = payload;
    },
    setMusic: (state, { payload }: PayloadAction<boolean>) => {
      state.settings.music = payload;
    },
    setTimer: (state, { payload }: PayloadAction<string>) => {
      state.settings.timer = +payload;
    },
    setLanguage: (state, { payload }: PayloadAction<string>) => {
      state.settings.language = payload;
    },
    setDefaultSettings: (state) => {
      state.settings = defaultSettings;
    },
  },
});

export const { setUsername, setScoreBoard, setTimerStatus, setMusic, setTimer, setLanguage, setDefaultSettings } = gameSlice.actions;
export default gameSlice.reducer;
