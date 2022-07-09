import { FunctionComponent } from 'react';
import { TileValue } from '../../constants/TileValueEnum';

interface GameProps {
  onClickRestart: () => void;
  winner: TileValue;
}

const Game: FunctionComponent<GameProps> = ({ onClickRestart, winner }: GameProps) => {
  return (
    <div>
      <div>{`Game Over ${winner} wins`}</div>
      <button onClick={onClickRestart}>Restart Game</button>
    </div>
  );
};

export default Game;
