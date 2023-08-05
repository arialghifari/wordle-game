import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([])
  const [status, setStatus] = React.useState<'running' | 'won' | 'lost'>(
    'running'
  )

  function handleSubmitGuess(tentativeGuess: string) {
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    if (tentativeGuess === answer) {
      return setStatus('won')
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return setStatus('lost')
    }
  }

  return (
    <React.Fragment>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      <Banner
        status={status}
        answer={answer}
        guessesAttempts={guesses.length}
      />
    </React.Fragment>
  )
}

export default Game
