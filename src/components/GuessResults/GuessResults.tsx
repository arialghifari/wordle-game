import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import Guess from '../Guess/';

function GuessResults({
  guesses,
  answer,
}: {
  guesses: string[];
  answer: string;
}) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} value={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;

