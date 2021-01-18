import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {

  let toyComponents = toys.map((toy) => 
  <ToyCard 
    key={toy.id}
    id={toy.id}
    name={toy.name}
    image={toy.image}
    likes={toy.likes}
    onDelete={onDelete}
    onLike={onLike}
  />)
  return (
    <div id="toy-collection">{toyComponents}</div>
  );
}

export default ToyContainer;
