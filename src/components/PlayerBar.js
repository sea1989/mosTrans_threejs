import React from "react";
import CommentsBlog from './CommentsBlog';
import PlayerBarDescription from './PlayerBarDescription';
import PlayerBarHeader from './PlayerBarHeader';


export default function PlayerBar({ className }) {

  return (
    <section className={className}>
      <PlayerBarHeader />
      <PlayerBarDescription />
      <CommentsBlog />
    </section>
  );
};
