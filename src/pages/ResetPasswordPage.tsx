import { Form, Formik } from "formik";

import { Header } from "../components/UI/Header";
import { InputText } from "../components/UI/InputText";
import "./css/Login.css";

export const ResetPasswordPage = () => {
  return (
    <>
      <Header />
      <div className="login">
        <h1 className="text-black text-title">Reset Password</h1>
        <div className="form-content">
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values, { resetForm }) => {
              resetForm();
            }}
          >
            <Form>
              <InputText
                name="email"
                id="email"
                type="email"
                label="E-Mail Address"
                placeholder="jhon@gmail.com"
              />
              <div className="mt-10"></div>
              <button className="btn btn-danger-outlined" type="submit">
                Send Password Reset Link
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
