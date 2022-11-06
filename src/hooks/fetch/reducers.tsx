import { AnyAction } from "redux";
import { TDictionary } from "../../commonTypes";

export const LOADING = 'LOADING';
export const FETCHED = 'FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';

interface IGameApiInitialState {
  status: string,
  error: string | null,
  data: TDictionary,
}

export const gameApiInitialState: IGameApiInitialState = {
  status: 'idle',
  error: null,
  data: {},
};

export function gameApiReducer(state: IGameApiInitialState, action: AnyAction): IGameApiInitialState {
  switch (action.type) {
    case LOADING: {
      return { 
        ...gameApiInitialState,
        status: 'loading'
      };
    }

    case FETCHED: {
      return { 
        ...gameApiInitialState,
        status: 'fetched',
        data: action.payload
      };
    }

    case FETCH_ERROR: {
      return { 
        ...gameApiInitialState,
        status: 'error',
        error: action.payload
      };
    }

    default:
      return state;
  }
}
