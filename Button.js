function SubmitButton(props) {
  return (
    <div className="form-field">
      <button className="app-button" type={props.type}>
        {props.value}
      </button>
    </div>
  );
}

export default SubmitButton;
