import { ChangeEvent, FC, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { StyledGameContainer } from './CommonStyle';
import {
  StyledNextButton,
  StyledPlayButton,
  StyledPlayInstructions,
  StyledTextInput,
  StyledUserField,
  StyledUsername,
} from './Welcome.styled';

import { gameSelectorUsername } from '../redux/game/game.selector';
import { setUsername } from '../redux/game/game.slice';
import { useAppDispatch } from '../redux/store';

const Welcome: FC = () => {
  const [ showName, setShowName ] =  useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const username = useSelector(gameSelectorUsername);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  }

  const nextStep = () => {
    setShowName((prevState) => !prevState);
  }
  
  const startGame = () => {
    navigate('/game')
  }

  const disableButton = username.length === 0;

  return (
    <StyledGameContainer>
      {showName
        ? 
          <>
            <StyledUsername onClick={nextStep} title="click to change the name" data-testid="username-label">
              Hello <strong>{username}</strong>
            </StyledUsername>
            <StyledPlayInstructions>
              <p>Click over the name to change it</p>
              <p>Or</p>
              <p>Click play button to start the game</p>
            </StyledPlayInstructions>
            <StyledPlayButton 
              type='button'
              id='play-buttonn'
              onClick={startGame}
              aria-label='play-button'
            >
              PLAY!
            </StyledPlayButton>
          </>
        : 
          <>
            <StyledUserField>
              <label htmlFor="user-input-name">
                Name: 
                <StyledTextInput
                  id='user-input-name'
                  aria-label='user-input-name'
                  onChange={handleChange}
                  value={username}
                  placeholder="Insert your name..."
                />
              </label>
            </StyledUserField>
            <StyledNextButton 
              type='button'
              id='play-buttonn'
              onClick={nextStep}
              aria-label='play-button'
              disabled={disableButton}
            >
              NEXT
            </StyledNextButton>
          </>
        }
    </StyledGameContainer>
  )
}

export default Welcome;
