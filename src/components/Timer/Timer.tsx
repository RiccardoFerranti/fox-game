import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { DEFAULT_TIMER } from '../../consts/general';
import { useRecord } from '../../RecordContext';
import { gameSelectorTimer } from '../../redux/game/game.selector';
import { setTimerStatus } from '../../redux/game/game.slice';
import { useAppDispatch } from '../../redux/store';

export interface ITimerProps {
  start: boolean,
  startTimer?: number,
}

const Timer: FC<ITimerProps> = ({ start, startTimer = DEFAULT_TIMER }) => {
  const [timer, setTimer] = useState(startTimer);
  const { loading } = useRecord();
  const timerStatus = useSelector(gameSelectorTimer);
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
