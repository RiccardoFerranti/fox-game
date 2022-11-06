import { FC } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { StyledGameContainer } from './CommonStyle';
import { 
  StyledButtonWrapper,
  StyledPlayButton,
  StyledScoreHeader,
  StyledScoreHeaderCell,
  StyledScoreRow,
  StyledScoreRowCell,
  StyledScoreTable,
  StyledScoreTile,
  StyledStartButton
} from './ScoreBoard.styled';

import { gameSelectorScoreBoard } from '../redux/game/game.selector';

const ScoreBoard: FC = () => {
  const navigate = useNavigate();
  
  const scoreboard = useSelector(gameSelectorScoreBoard);

  const headerCellLabels = ['Rank', 'Name', 'Date', 'Score'];

  return (
    <StyledGameContainer>
      <StyledScoreTile>ScoreBoard</StyledScoreTile>
      <StyledScoreTable>
        <StyledScoreHeader>
          {headerCellLabels.map((label) => (
            <StyledScoreHeaderCell key={label}>{label}</StyledScoreHeaderCell>
          ))}
        </StyledScoreHeader>
        {
          Array.from(Array(7).keys()).map((id) => (
            <StyledScoreRow key={id}>
              <StyledScoreRowCell data-testid={`rank-${id}`}>{id + 1}</StyledScoreRowCell>
              <StyledScoreRowCell data-testid={`name-${id}`}>{scoreboard[id]?.name}</StyledScoreRowCell>
              <StyledScoreRowCell data-testid={`date-${id}`}>{scoreboard[id]?.date}</StyledScoreRowCell>
              <StyledScoreRowCell data-testid={`score-${id}`}>{scoreboard[id]?.score}</StyledScoreRowCell>
            </StyledScoreRow>
          ))
        }
      </StyledScoreTable>
      <StyledButtonWrapper>
        <StyledStartButton 
          type='button'
          id='start-buttonn'
          onClick={() => navigate('/')}
          aria-label='start-button'
        >
          TO WELCOME PAGE
        </StyledStartButton>
        <StyledPlayButton 
          type='button'
          id='play-buttonn'
          onClick={() => navigate('/game')}
          aria-label='play-button'
        >
          PLAY!
        </StyledPlayButton>
      </StyledButtonWrapper>
    </StyledGameContainer>
  )
}

export default ScoreBoard;
