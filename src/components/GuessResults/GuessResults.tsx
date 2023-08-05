import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import Guess from '../Guess/Guess'

type GuessInputProps = {
  guesses: string[]
  answer: string
}

function GuessResults({ guesses, answer }: GuessInputProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guesses[num]} answer={answer} />
      ))}
    </div>
  )
}

export default GuessResults
