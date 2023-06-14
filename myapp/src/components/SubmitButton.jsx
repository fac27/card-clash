function SubmitButton(props) {
  const { selectedValue, handleSubmission } = props

  return (
    <button value={selectedValue} onClick={handleSubmission}> Unleash your extraterrestrial pick!</button>
  )
}

export default SubmitButton