import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

type CellProps = {
  letter: string
  status: string
}

function Cell({ letter, status }: CellProps) {
  const className = status ? `cell ${status}` : 'cell'

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
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  )
}

export default Guess
