import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import Guess from '../Guess/Guess'

type GuessInputProps = {
  guesses: string[]
}

function GuessResluts({ guesses }: GuessInputProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  )
}

export default GuessResluts
