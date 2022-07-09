import { FunctionComponent, useState } from 'react';
import { TileValue } from '../../constants/TileValueEnum';
import Board from '../board/Board';
import GameOver from '../gameOver/GameOver';

interface GameProps {}

const Game: FunctionComponent<GameProps> = () => {
  const [winner, setWinner] = useState(undefined as unknown as TileValue);

  const onPlayerWin = (winner: TileValue) => {
    setWinner(winner);
  };

  const restartGame = () => {
    setWinner(undefined as unknown as TileValue);
  };

  return (
    <div>
      {winner ? (
        <GameOver winner={winner} onClickRestart={restartGame} />
      ) : (
        <Board onPlayerWin={onPlayerWin} />
      )}
    </div>
  );
};

export default Game;
