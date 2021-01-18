import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((toyArray) => setToys(toyArray))
  }, [])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy){
    const newToyArray = [...toys, newToy]
    setToys(newToyArray)
  }

  function handleDelete(id){
    const newToyArray = toys.filter((toy) => toy.id !== id)
    setToys(newToyArray)
  }

  function handleLikeUpdate(updatedToy){
    const newToyArray = toys.map((toy) => toy.id === updatedToy.id ? updatedToy : toy)
    setToys(newToyArray)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDelete} onLike={handleLikeUpdate}/>
    </>
  );
}

export default App;
