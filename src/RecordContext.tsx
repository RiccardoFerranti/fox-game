import { createContext, FC, ReactNode, useContext } from 'react';

import { TDictionary } from './commonTypes';

const RecordContext = createContext<any>(null);

RecordContext.displayName = 'RecordContext';

interface IRecordProviderProps {
  record: TDictionary,
  children: ReactNode | ReactNode[],
}

export const RecordProvider: FC<IRecordProviderProps> = ({ record, children }) => (
  <RecordContext.Provider value={record}>
    {children}
  </RecordContext.Provider>
);

export function useRecord <T = any>(record?: T): T {
  const context = useContext(RecordContext);

  return record || context;
}
