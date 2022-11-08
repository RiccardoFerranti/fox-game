import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useRecord } from '../../RecordContext';
import { gameSelectorSettingsTimer, gameSelectorTimer } from '../../redux/game/game.selector';
import { setTimerStatus } from '../../redux/game/game.slice';
import { useAppDispatch } from '../../redux/store';

export interface ITimerProps {
  start: boolean,
}

const Timer: FC<ITimerProps> = ({ start }) => {
  const startTimer = useSelector(gameSelectorSettingsTimer);
  const [timer, setTimer] = useState(startTimer);

  const timerStatus = useSelector(gameSelectorTimer);
  const { loading } = useRecord();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
  
    if (!loading && start && timer > 0) {
      if (timerStatus !== 'running') {
        dispatch(setTimerStatus('running'));
      }

      interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);

      return () =>  clearInterval(interval);
    }

    if (timer === 0 && timerStatus === 'running') {
      dispatch(setTimerStatus('end'));
    }
  }, [timer, start, loading, dispatch, timerStatus]);

  return (
    <p>Timer left: {timer}</p>
  )
}

export default Timer;
