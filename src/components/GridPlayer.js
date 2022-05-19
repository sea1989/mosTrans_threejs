import React, { useState } from "react";

//import grid from "../assets/css/grid.module.css";
import Player from './Player';
import PlayerBar from './PlayerBar';
import SuggestionsBlock from './SuggestionsBlock';

export default function GridPlayer() {
  const [isPlayerWide, setIsPlayerWide] = useState(false);

  return (
    <div>

      <button onClick={() => setIsPlayerWide((prev) => !prev)}>
        Toggle grid player width
      </button>

      <div
        className={`grid ${isPlayerWide ? `wide-player` : ""}`}
      >
        <Player className='player' />
        <SuggestionsBlock className='suggestions' />
        <PlayerBar className='player-bar' />
      </div>

    </div>
  );
};
