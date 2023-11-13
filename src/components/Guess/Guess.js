import React from "react";
import { range } from "../../utils";
import checkGuess from "../../game-helpers";

function Guess({ guessWord, answer }) {
  const validateGuess = checkGuess(guessWord, answer);

  return (
    <>
      <p className="guess">
        {range(5).map((num) => (
          <span
            key={crypto.randomUUID()}
            className={`cell ${
              validateGuess !== null ? validateGuess[num].status : ""
            }`}
          >
            {guessWord && guessWord.split("")[num]}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
