import React from "react";
import RecomendList from './RecomendList';


export default function SuggestionsBlock({ className }) {

  return (
    <section className={className}>
      <RecomendList />
    </section>
  );
};
