export default function ResetButtons({ onResetResult, onResetInput }) {
  return (
    <>
      <button className="reset" onClick={() => onResetInput(0)}>
        Reset Input
      </button>
      <button className="reset" onClick={() => onResetResult(0)}>
        Reset Result
      </button>
    </>
  );
}
