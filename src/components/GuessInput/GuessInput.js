import React from "react";

function GuessInput({ handleSubmitGuesses, gameStatus }) {
  const [guessValue, setGuessValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuesses(guessValue);
    setGuessValue("");
  };

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    // const newValue = value.replace(/[^A-Za-z]/g, "").substring(0, 5);
    setGuessValue(value);
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          type="text"
          id="guess-input"
          value={guessValue}
          pattern="[A-Za-z]{5}"
          title="5 letter word"
          onChange={handleChange}
          disabled={gameStatus !== "running"}
        />
      </form>
    </>
  );
}

export default GuessInput;
