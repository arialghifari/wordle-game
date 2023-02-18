function Guess({ value }: { value?: string | undefined }) {
  const valueArray = value ? value.split('') : ['', '', '', '', ''];

  return (
    <p className='guess'>
      {valueArray.map((letter, index) => (
        <span key={index} className='cell'>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;

