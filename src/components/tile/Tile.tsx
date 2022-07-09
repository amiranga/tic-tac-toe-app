import React, { MouseEvent } from 'react';
import styles from './style.module.css';
import { TileValue } from '../../constants/TileValueEnum';

interface TileProps {
  selected: TileValue;
  currentPlayer: TileValue;
  index: number;
  onSelect: Function;
}

function Tile({ selected, currentPlayer, index, onSelect }: TileProps) {
  function _onClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    if (selected === TileValue.EMPTY) {
      onSelect(index);
    }
  }
  return (
    <div
      className={[
        styles.tile,
        selected === TileValue.PLAYER_1
          ? styles.player_1_selected
          : selected === TileValue.PLAYER_2
          ? styles.player_2_selected
          : '',
        selected === TileValue.EMPTY
          ? currentPlayer === TileValue.PLAYER_1
            ? styles.player_1_cursor
            : currentPlayer === TileValue.PLAYER_2
            ? styles.player_2_cursor
            : ''
          : '',
      ].join(' ')}
      onClick={_onClick}
    ></div>
  );
}

export default Tile;
