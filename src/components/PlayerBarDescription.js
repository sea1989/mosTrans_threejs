import React, { useState } from "react";

import avatar from "../assets/Avatar.svg";

export default function PlayerBarDescription() {

  const [visibleShort, setVisibleShort] = useState([true]);

  return (
    <div className='player-bar-description'>

      <div className='player-bar-description__header'>

        <div className='player-user'>
          <img id="" width='50px' height='50px' src={avatar} alt="" className="info-block__avatar" />
          <div className='player-user__info'>
            <h2>
              User Name
            </h2>
            <span className='followers'>6,23M subscribers</span>
          </div>
        </div>
        <button className='button-standart'>subscribe</button>

      </div>

      <div className='player-bar-description__main'>
        <p className={visibleShort ? 'player-bar-description__short' : ''}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
          Sed sagittis...

          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
          Sed sagittis...
        </p>
        <button
          className={visibleShort ? 'visually-hidden' : 'button-more'}
          onClick={() => setVisibleShort(true)}
        >hide</button>

        <button
          className={visibleShort ? 'button-more' : 'visually-hidden'}
          onClick={() => setVisibleShort(false)}
        >
          show-more
        </button>
      </div>

    </div>
  );
};
