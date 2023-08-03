import React from 'react'

function GuessInput() {
  const [guess, setGuess] = React.useState('')

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (guess.length !== 5) return

    console.log({ guess })
  }

  return (
    <form onSubmit={handleOnSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="must be exact 5 letters words"
        autoComplete="off"
      />
    </form>
  )
}

export default GuessInput
