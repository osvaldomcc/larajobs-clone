import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { InputText } from "../UI/InputText";
import "./css/LoginForm.css";

export const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="card bg-gray">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm, setFieldError }) => {
            // resetForm();
            setFieldError("password", "En candela");
          }}
          validationSchema={Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
          })}
        >
          <Form className="form-login" noValidate>
            <div className="post-input">
              <InputText
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                className="bg-white"
              />
            </div>
            <div className="post-input">
              <InputText
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                className="bg-white"
              />
            </div>
            <button
              className="btn btn-danger-outlined inline-login"
              type="submit"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
      <div className="forgot-or-create">
        <Link to="/reset-password" className="text-light-blue">
          Forgot Your Password?
        </Link>
        <a href="#!" className="text-dark-gray">
          No account? We'll set one up below.
        </a>
      </div>
    </div>
  );
};
