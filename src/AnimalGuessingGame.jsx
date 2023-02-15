import React, { useState } from "react";
import Animals from "./Animals";
import './Game.css';

function AnimalGuessingGame() {
  const [letter, setLetter] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  function handleLetterChange(event) {
    setLetter(event.target.value.toLowerCase());
  }

  function handleGuess(event) {
    event.preventDefault();
    const animal = Animals.getAnimalStartingWithLetter(letter);
    if (animal) {
      setAnswer(animal);
      setResult(`Congratulations! The answer was ${animal}.`);
    } else {
      setResult(`There are no animals starting with the letter ${letter}.`);
    }
  }

  return (
    <div>
      <form className="fo" onSubmit={handleGuess}>
        <label className="lab">
            There are 10 animals in memory!
          Guess an animal by providing the first letter of its name:
          <input className="in" type="text" value={letter} onChange={handleLetterChange} />
        </label>
        <button className="bu" type="submit">Guess</button>
      </form>
      <p className="par">{result}</p>
    </div>
  );
}

export default AnimalGuessingGame;