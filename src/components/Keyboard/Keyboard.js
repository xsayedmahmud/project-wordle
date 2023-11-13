import React from "react";
import checkGuess from "../../game-helpers";

function Keyboard({ guesses, answer }) {
  const keyRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const validateGuess = guesses.map((guessValue) =>
    checkGuess(guessValue, answer)
  );

  const allGuesses = validateGuess.flat();

  const letterStatus = allGuesses.reduce((statusObj, guess) => {
    if (guess.status === "correct" && !statusObj[guess.letter]) {
      statusObj[guess.letter] = guess.status;
    } else if (guess.status === "incorrect" && !statusObj[guess.letter]) {
      statusObj[guess.letter] = guess.status;
    } else if (
      guess.status === "misplaced" &&
      !statusObj[guess.letter] &&
      statusObj[guess.status] === "misplaced"
    ) {
      statusObj[guess.letter] = guess.status;
    }
    return statusObj;
  }, {});

  const getClassByLetter = (letter) => {
    return `letter ${letterStatus[letter] || ""}`;
  };

  return (
    <>
      <div className="keyboard">
        {keyRows.map((row) => (
          <div key={crypto.randomUUID()} className="row">
            {row.map((letter) => (
              <span
                key={crypto.randomUUID()}
                className={getClassByLetter(letter)}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
