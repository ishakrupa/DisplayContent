export default function Button({ buttonText, resType, setResType }) {
  return (
    <>
      <button
        className={buttonText === resType ? "selected" : null}
        type="button"
        onClick={() => setResType(buttonText)}
      >
        {" "}
        {buttonText}{" "}
      </button>
    </>
  );
}
