import Banner from '../Banner'

function LostBanner({ answer }: { answer: string }) {
  return (
    <Banner type="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default LostBanner
