import Banner from '../Banner'

type WonBannerProps = {
  guessesAttempts: number
  handleRestartGame: () => void
}

function WonBanner({ guessesAttempts, handleRestartGame }: WonBannerProps) {
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
      <button className='btn-restart' onClick={handleRestartGame}>Restart</button>
    </Banner>
  )
}

export default WonBanner
