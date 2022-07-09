import React, { useState } from 'react';
import Tile from '../tile/Tile';
import { TileValue } from '../../constants/TileValueEnum';
import { WINNING_COORDINATES } from './BoardConstants';
import { isSubList, getAllIndexes } from '../../utils/commonUtils';
import styles from './style.module.css';

const squareCount = 9;

const getInitialTileValues = (): TileValue[] =>
  new Array(squareCount).fill(TileValue.EMPTY);

const isStraightLineSelected = function (selection: number[]): boolean {
  let selected = false;
  for (const coordinate of WINNING_COORDINATES) {
    if (isSubList(coordinate, selection)) {
      selected = true;
      break;
    }
  }
  return selected;
};

interface BoardProps {
  onPlayerWin: (winner: TileValue) => void;
}

function Board({ onPlayerWin }: BoardProps) {
  const [squares, setSquares] = useState(getInitialTileValues());
  const [currentPlayer, setCurrentPlayer] = useState(TileValue.PLAYER_1);

  const squareSelected = (tileNumber: number) => {
    squares[tileNumber] = currentPlayer;
    const selections = getAllIndexes(squares, currentPlayer);
    const isPlayerWon = isStraightLineSelected(selections);
    if (isPlayerWon) {
      setSquares(getInitialTileValues());
      setCurrentPlayer(TileValue.PLAYER_1);
      onPlayerWin(currentPlayer);
      return;
    }
    setSquares(squares);
    setCurrentPlayer(
      currentPlayer === TileValue.PLAYER_1
        ? TileValue.PLAYER_2
        : TileValue.PLAYER_1
    );
  };
  return (
    <div className={styles.boardArea}>
      {squares.map((squareVal, index) => (
        <Tile
          key={index}
          selected={squareVal}
          currentPlayer={currentPlayer}
          index={index}
          onSelect={(x: any) => {
            squareSelected(x);
          }}
        />
      ))}
    </div>
  );
}

export default Board;
