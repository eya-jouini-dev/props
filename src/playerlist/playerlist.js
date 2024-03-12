// src/PlayersList.js

import React from 'react';
import Players from '../players';
import Player from '../player/player';
import './playerlist.css';
const Playerlist = () => {
  return (
    <div className='eya'>
      {Players.map((player, index) => {
        return(
            <Player key={index} {...player} />
        )
      })}
    </div>
  );
}

export default Playerlist;

