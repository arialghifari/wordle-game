import React from 'react'
import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import gsap from 'gsap'

// Pick a random word on every pageload.
const initialAnswer = sample(WORDS)

function Game() {
  const [guesses, setGuesses] = React.useState<string[]>([])
  const [status, setStatus] = React.useState<'running' | 'won' | 'lost'>(
    'running'
  )
  const [answer, setAnswer] = React.useState(initialAnswer)
  console.log({ answer })

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

  function handleRestartGame() {
    setAnswer(sample(WORDS))
    setGuesses([])
    setStatus('running')
  }

  React.useEffect(() => {
    gsap.from('.cell', {
      border: '2px solid #c9e1ff',
      opacity: 0.3,
      stagger: {
        each: 0.1,
        from: 'center',
        grid: 'auto',
        ease: 'none',
      },
    })
  }, [])

  return (
    <React.Fragment>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />

      {status === 'won' && (
        <WonBanner
          guessesAttempts={guesses.length}
          handleRestartGame={handleRestartGame}
        />
      )}
      {status === 'lost' && (
        <LostBanner answer={answer} handleRestartGame={handleRestartGame} />
      )}
    </React.Fragment>
  )
}

export default Game
