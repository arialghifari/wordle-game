import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const [gameStatus, setGameStatus] = React.useState<string>('running');

  function handleSubmitGuess(tentativeGuess: string) {
    setGuesses((prevGuesses) => [...prevGuesses, tentativeGuess]);

    if (tentativeGuess === answer) {
      return setGameStatus('won');
    }

    if (
      guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED &&
      gameStatus === 'running'
    ) {
      return setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <GameOverBanner
        gameStatus={gameStatus}
        guessesLength={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
