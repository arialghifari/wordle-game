import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

type CellProps = {
  letter: string
  status: string
}

function Cell({ letter, status }: CellProps) {
  const className = letter ? `cell ${status}` : 'cell'

  return <span className={className}>{letter}</span>
}

type GuessProps = {
  guess: string
  answer: string
}

function Guess({ guess, answer }: GuessProps) {
  const result = checkGuess(guess, answer)

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result[num].letter}
          status={result[num].status}
        />
      ))}
    </p>
  )
}

export default Guess
