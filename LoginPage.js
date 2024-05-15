import LoginForm from "../components/Loginform";
import './../css/login.css' ;

function LoginPage() {
  return (
    <div className="main-container login-page">
      <div className="login-background"></div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
