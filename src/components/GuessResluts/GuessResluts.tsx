type GuessInputProps = {
  guesses: string[]
}

function GuessResluts({ guesses }: GuessInputProps) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
    </div>
  )
}

export default GuessResluts
