function Banner({ type }) {
  switch (type) {
    case 'happy':
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )
    case 'sad':
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )
    default:
      break
  }
}

export default Banner
