import Banner from '../Banner'

type LostBannerBannerProps = {
  answer: string
  handleRestartGame: () => void
}

function LostBanner({ answer, handleRestartGame }: LostBannerBannerProps) {
  return (
    <Banner type="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="btn-restart" onClick={handleRestartGame}>
        Restart
      </button>
    </Banner>
  )
}

export default LostBanner
