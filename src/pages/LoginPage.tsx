import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { Header } from "../components/UI/Header";
import { InputCheck } from "../components/UI/InputCheck";
import { InputText } from "../components/UI/InputText";
import "./css/Login.css";

export const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login">
        <h1 className="text-black text-title">Login</h1>
        <div className="form-content">
          <Formik
            initialValues={{ email: "", password: "", remember: false }}
            onSubmit={(values, { resetForm }) => {
              resetForm();
            }}
            validationSchema={Yup.object({
              email: Yup.string().required().email(),
              password: Yup.string()
                .min(6, "The password must be at least 6 characters")
                .required(),
              remember: Yup.boolean().required(),
            })}
          >
            <Form>
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
              <div className="remember-me mt-10">
                <InputCheck id="remember" name="remember" label="Remember me" />
              </div>
              <div className="forgot">
                <button className="btn btn-danger-outlined" type="submit">
                  Login
                </button>
                <Link to="/reset-password" className="text-dark-gray">
                  Forgot Your Password?
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
