import React from 'react'

type GuessInputProps = {
  handleSubmitGuess: (tentativeGuess: string) => void
  status: 'running' | 'won' | 'lost'
}

function GuessInput({ handleSubmitGuess, status }: GuessInputProps) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (tentativeGuess.length !== 5) return

    handleSubmitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form onSubmit={handleOnSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="must be exact 5 letters words"
        autoComplete="off"
        disabled={status !== 'running'}
      />
    </form>
  )
}

export default GuessInput
