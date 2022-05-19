import React from "react";


export default function PlayerBarHeader() {

  return (
    <div className='player-bar-header'>

      <h1>Long video name, but it couldn t be longer then 2 rows. Next symbol is ablolutely awesome</h1>
      <div className='player-bar-header__statistic'>
        <div className='player-bar-header__views'>2 478 975 views</div>
        <div className='player-bar-header__likes'>59K likes 1 243 dislikes</div>
      </div>
    </div>
  );
};
