import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import { StyledDescription, StyledFoxLogo, StyledStartButton } from './Splash.styled';
import { StyledGameContainer } from './CommonStyle';

import fox from "../images/fox.png";
import ErrorMessage from '../components/Error/Error';
import { useRecord } from '../RecordContext';
import Loading from '../components/Loading/Loading';
import { ERROR_MESSAGE } from '../consts/general';

const Splash: FC = () => {
  const navigate = useNavigate()
  const { loading, error } = useRecord();

  if (error) {
    return (
      <StyledGameContainer>
        <ErrorMessage error={ERROR_MESSAGE} />
      </StyledGameContainer>
    )
  }

  return (
    <>
      <StyledGameContainer>
        <StyledFoxLogo src={fox} alt='fox face' title='fox logo face' data-testid='fox-logo-face' />
        <StyledDescription>Click the fox as many times as you can within 30 seconds</StyledDescription>
        {loading
          ? 
            <Loading message='Initializing' />
          :
          <StyledStartButton 
            type='button'
            id='start-buttonn'
            onClick={() => navigate('/welcome')}
            aria-label='start-button'
          >
            START
          </StyledStartButton>
        }
      </StyledGameContainer>
    </>
  )
}

export default Splash;
