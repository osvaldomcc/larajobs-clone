import { InputCheck } from "../components/UI/InputCheck";
import { InputText } from "../components/UI/InputText";
import "./css/Login.css";

export const Login = () => {
  return (
    <div className="login">
      <h1 className="text-black text-title">Login</h1>
      <div className="form-content">
        <form>
          <InputText
            name="email"
            id="email"
            type="email"
            label="E-Mail Address"
            placeholder="jhon@gmail.com"
          />
          <InputText
            name="password"
            id="password"
            type="password"
            label="Password"
            placeholder="************"
          />
          <div className="remember-me">
            <InputCheck id="remember" name="remember" label="Remember me" />
          </div>
          <div className="forgot">
            <button className="btn btn-danger-outlined" type="submit">
              Login
            </button>
            <a href="#!" className="text-dark-gray">
              Forgot Your Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
