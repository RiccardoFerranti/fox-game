import { FC } from 'react';

export interface IScoreProps {
  score?: number,
}

const GameScore: FC<IScoreProps> = ({ score }) => (
    <p>Score: <strong>{score}</strong></p>
);

export default GameScore;
