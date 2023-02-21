function GameOverBanner({
  gameStatus,
  answer,
  guessesLength,
}: {
  gameStatus: string;
  answer: string;
  guessesLength: number;
}) {
  return (
    <>
      {gameStatus === 'won' && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {guessesLength > 1 ? ` ${guessesLength} guesses` : ' 1 guess'}.
            </strong>
          </p>
        </div>
      )}

      {gameStatus === 'lost' && (
        <div className='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOverBanner;

