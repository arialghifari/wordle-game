import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  function handleOnChange(event) {
    if (event.target.value.length <= 5) {
      return setGuess(event.target.value.toUpperCase());
    }
  }

  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={handleOnChange}
        pattern='[A-Za-z]{5}'
        title='Guesses have to contain 5-letter words.'
        required
      />
    </form>
  );
}

export default GuessInput;

