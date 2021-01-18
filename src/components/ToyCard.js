import React from "react";

function ToyCard({name, image, likes, id, onDelete, onLike}) {

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }   
    })
    onDelete(id)
  }

  function handleLike(){
    const newLikes = {likes: (likes + 1)}
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLikes)   
    })
    .then((r) => r.json())
    .then((updatedToy) => {
      onLike(updatedToy)
    })

  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
