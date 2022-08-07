const TextInput = (props) => {

  return (
    <div className="form-field">
      <input
        type={props.type}
        onChange={(event) => props.onChange(event.target.value)}
        className="username"
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default TextInput;
