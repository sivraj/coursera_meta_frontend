export default function ArithmaticOperationsButtons({
  input,
  result,
  onResultChange,
}) {
  const divide = () => {
    if (input === 0) {
      alert("Cannot divide by zero");
    } else {
      onResultChange(result / input);
    }
  };
  return (
    <>
      <button onClick={() => onResultChange(result + input)}>Add</button>
      <button onClick={() => onResultChange(result - input)}>Subtract</button>
      <button onClick={() => onResultChange(result * input)}>Multiply</button>
      <button onClick={() => divide()}>Divide</button>
    </>
  );
}
