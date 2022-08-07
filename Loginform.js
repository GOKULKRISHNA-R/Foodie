import TextInput from "./Input";
import SubmitButton from "./Button";
import { useState } from "react";
import logo from "./../resource/logo.png";

function LoginForm() {
  var [username, onUsernameChange] = useState("");
  var [password, onPasswordChange] = useState("");

  return (
    <form className="login-form">
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      <TextInput
        placeholder="UserName"
        type="text"
        value={username}
        onChange={onUsernameChange}
      />
      <TextInput
        placeholder="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      <SubmitButton value="LOGIN" type="submit" />
      <span className="forgot-password">Forgot Password?</span>
      <a className="link" href="">
        Click Here
      </a>
    </form>
  );
}

export default LoginForm;
