import { FC, SyntheticEvent, useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useSelector } from 'react-redux';

import { StyledGameSettings, StyledOverlay, StyledStartTimer } from './Game.style';
import { StyledGameContainer } from './CommonStyle';

import { useRecord } from '../RecordContext';
import Board from '../components/Board/Board';
import Score from '../components/Score/Score';
import Timer from '../components/Timer/Timer';
import SoundPlayer from '../components/SoundPlayer/SoundPlayer';
import ErrorMessage from '../components/Error/Error';
import { useAppDispatch } from '../redux/store';
import { setScoreBoard, setTimerStatus } from '../redux/game/game.slice';
import { gameSelectorTimer, gameSelectorUsername } from '../redux/game/game.selector';
import formatCurrentDate from '../helpers/formatCurrentDate';
import shuffle from '../helpers/shuffle';
import useTimer from '../hooks/useTimer';
import { ERROR_MESSAGE, NUMBER_CATS_FETCHED, NUMBER_DOGS_FETCHED, NUMBER_FOXES_FETCHED } from '../consts/general';
import { IRecordImage } from '../Layout/types';

const Game: FC = () => {
  const [newSetImages, setNewSetImages] = useState(0)
  const [imagesToRender, setImagesToRender] = useState<Array<IRecordImage>>([]);
  const [score, setScore] = useState(0);

  const startTimer = useTimer();

  const userName = useSelector(gameSelectorUsername);
  const timerStatus = useSelector(gameSelectorTimer);
  const navigate = useNavigate();
  
  const dispatch = useAppDispatch();
  const { loading, error, images } = useRecord();

  useEffect(() => {
    // case where it's cleared the localstorage and the name is not set
    if (!userName.length) navigate('/');
  }, [userName, navigate]);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    if (timerStatus === 'end') {
      timeOut = setTimeout(() => {
        const currentDate = formatCurrentDate(new Date());
        dispatch(setScoreBoard({ score, currentDate, userName }));
        dispatch(setTimerStatus('idle'));
        navigate('/score');
      }, 2000);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [timerStatus, navigate, dispatch, score, userName]);


  useDeepCompareEffect(() => {
      /**
       *  if images are not loaded or the user refresh the page, 
       *  it's redirected to the main page with the loading screen 
       */
      if (loading) navigate('/');

      const { cats, dogs, foxes } = images;
      const newCats = JSON.parse(JSON.stringify(cats));
      const newDogs = JSON.parse(JSON.stringify(dogs));
      const newFoxes = JSON.parse(JSON.stringify(foxes));
      
      if (newCats.length !== NUMBER_CATS_FETCHED
        && newDogs.length !== NUMBER_DOGS_FETCHED
        && newFoxes.length !== NUMBER_FOXES_FETCHED) return;
        
        const catsImages = shuffle(newCats).splice(0, 4);
        const dogsImages = shuffle(newDogs).splice(0, 4);
        const foxesImages = shuffle(newFoxes).splice(0, 1);
        
        const imagesToRender = shuffle([...catsImages, ...dogsImages, ...foxesImages]);
        
      if (imagesToRender.length !== 9) return;

      setImagesToRender([...imagesToRender])
  }, [loading, images, newSetImages])


  const clickImage = useCallback((e: SyntheticEvent, name: string) => {
    setNewSetImages((prevState) => prevState + 1);

    if (name === 'fox') {
      setScore((prevState) => prevState + 1);
    } else {
      setScore((prevState) => {
        if (prevState === 0) return 0;
        return prevState - 1;
      });
    }
  }, [])

  if (error) {
    return (
      <StyledGameContainer>
        <ErrorMessage error={ERROR_MESSAGE} />
      </StyledGameContainer>
    )
  }

  const startTheTimer = imagesToRender.length === 9 && startTimer !== 0;
  const startTheGameTimer = startTimer === 0;

  return (
    <StyledGameContainer>
      {timerStatus === 'end' ? <StyledOverlay><p>The time is finished</p></StyledOverlay> : null}
      {startTheTimer ? <StyledOverlay><StyledStartTimer>{startTimer}</StyledStartTimer></StyledOverlay> : null}
      <SoundPlayer start={startTheGameTimer} timerStatus={timerStatus} />
      <StyledGameSettings>
        <Score score={score} />
        <Timer start={startTheGameTimer} />
      </StyledGameSettings>
      <Board images={imagesToRender} handleClickImage={clickImage} />
    </StyledGameContainer>
  )
}

export default Game;
