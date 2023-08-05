import Banner from '../Banner'

function WonBanner({ guessesAttempts }: { guessesAttempts: number }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {guessesAttempts === 1 ? '1 guess' : `${guessesAttempts} guesses`}
        </strong>
        .
      </p>
    </Banner>
  )
}

export default WonBanner
