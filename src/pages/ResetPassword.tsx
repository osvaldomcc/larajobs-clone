import { InputText } from "../components/UI/InputText";
import "./css/Login.css";

export const ResetPassword = () => {
  return (
    <div className="login">
      <h1 className="text-black text-title">Reset Password</h1>
      <div className="form-content">
        <form>
          <InputText
            name="email"
            id="email"
            type="email"
            label="E-Mail Address"
            placeholder="jhon@gmail.com"
          />
          <button className="btn btn-danger-outlined" type="submit">
            Send Password Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};
