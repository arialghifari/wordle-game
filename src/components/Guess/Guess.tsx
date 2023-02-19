import { checkGuess } from '../../game-helpers';

function Guess({
  value,
  answer,
}: {
  value: string | undefined;
  answer: string;
}) {
  const result = checkGuess(value, answer) ?? [
    { letter: '', status: '' },
    { letter: '', status: '' },
    { letter: '', status: '' },
    { letter: '', status: '' },
    { letter: '', status: '' },
  ];

  return (
    <p className='guess'>
      {result.map((guess, index) => (
        <span key={index} className={`cell ${guess.status}`}>
          {guess.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

