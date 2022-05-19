import React from "react";

import avatar from "../assets/Avatar.svg";

export default function CommentsBlog() {

  return (
    <div className='comments'>
      <div className='comments__header'>
        <span className='comments__numbers'>2 077 comments</span>
        <span className='comments__sort'>Sort</span>
      </div>

      <ul className='comments__list'>
        <li className='comment-item'>
          <img id="" width='50px' height='50px' src={avatar} alt="" className="info-block__avatar" />

          <div className='comment-item__wrapper'>
            <div className='comment-item__header'>
              <h3 className='comment-item__title'>Commentor Name</h3>
              <span className='comment-item__date'>2 hours ago</span>
            </div>

            <div className='comment-item__main'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
                Sed sagittis...

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
                Sed sagittis...
              </p>

              <div className='comment-item__likes'>
                likes 144 dislikes 3
              </div>
            </div>
          </div>


        </li>

        <li className='comment-item'>
          <img id="" width='50px' height='50px' src={avatar} alt="" className="info-block__avatar" />

          <div className='comment-item__wrapper'>
            <div className='comment-item__header'>
              <h3 className='comment-item__title'>Commentor Name</h3>
              <span className='comment-item__date'>2 hours ago</span>
            </div>

            <div className='comment-item__main'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
                Sed sagittis...

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
                Sed sagittis...
              </p>

              <div className='comment-item__likes'>
                likes 144 dislikes 3
              </div>
            </div>
          </div>


        </li>

        <li className='comment-item'>
          <img id="" width='50px' height='50px' src={avatar} alt="" className="info-block__avatar" />

          <div className='comment-item__wrapper'>
            <div className='comment-item__header'>
              <h3 className='comment-item__title'>Commentor Name</h3>
              <span className='comment-item__date'>2 hours ago</span>
            </div>

            <div className='comment-item__main'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
                Sed sagittis...

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla pellentesque suspendisse nisl fermentum sapien, nulla nulla posuere.
                Sed sagittis...
              </p>

              <div className='comment-item__likes'>
                likes 144 dislikes 3
              </div>
            </div>
          </div>


        </li>
      </ul>

    </div>
  );
};
