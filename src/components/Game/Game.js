import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner/SadBanner";
import NUM_OF_GUESSES_ALLOWED from "../../constants";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const handleSubmitGuesses = (guessValue) => {
    const nextGuesses = [...guesses, guessValue];
    setGuesses(nextGuesses);

    if (guessValue === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };
  console.log(answer);
  const handleRestart = () => {
    setGuesses([]);
    setGameStatus("running");
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />{" "}
      <Keyboard guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuesses={handleSubmitGuesses}
      />
      {gameStatus === "won" && (
        <HappyBanner
          handleRestart={handleRestart}
          numOfGuesses={guesses.length}
        />
      )}
      {gameStatus === "lost" && (
        <SadBanner handleRestart={handleRestart} answer={answer} />
      )}
    </>
  );
}

export default Game;
