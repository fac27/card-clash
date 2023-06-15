function SubmitButton(props) {
  const { selectedValue, handleSubmission } = props;

  return (
    <button value={selectedValue} onClick={handleSubmission}>
      {" "}
      Unleash your pick!
    </button>
  );
}

export default SubmitButton;
