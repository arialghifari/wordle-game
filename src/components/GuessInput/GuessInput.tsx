import React from 'react';

function GuessInput({
  handleSubmitGuess,
}: {
  handleSubmitGuess: (tentativeGuess: string) => void;
}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 5) return;
    setTentativeGuess(event.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={tentativeGuess}
        onChange={handleOnChange}
        pattern='[A-Za-z]{5}'
        title='Guesses have to contain 5-letter words.'
        required
      />
    </form>
  );
}

export default GuessInput;

