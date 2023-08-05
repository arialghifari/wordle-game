type BannerProps = {
  status: 'won' | 'lost' | 'running'
  answer: string
  guessesAttempts: number
}

function Banner({ status, answer, guessesAttempts }: BannerProps) {
  if (status === 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {guessesAttempts === 1 ? '1 guess' : `${guessesAttempts} guesses`}
          </strong>
          .
        </p>
      </div>
    )
  }

  if (status === 'lost') {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  }
}

export default Banner
