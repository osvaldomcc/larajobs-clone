import { Form, Formik } from "formik";
import * as Yup from "yup";

import { InputText } from "./InputText";
import "./css/Suscription.css";

export const Suscription = () => {
  return (
    <div className="wrapper">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, { resetForm }) => {}}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
        })}
      >
        <Form className="subscription-form">
          <div className="subscription-form-select">
            <label htmlFor="suscriptionType">Get an</label>
            <select name="suscriptionType" id="suscriptionType">
              <option value="instant">Instant</option>
              <option value="weekly">Weekly</option>
            </select>
            <label htmlFor="email">email of all new jobs</label>
          </div>
          <div className="grow-input">
            <InputText
              name="email"
              id="email"
              type="email"
              placeholder="Your email address"
              className="bg-white"
            />
          </div>
          <button className="btn btn-danger-outlined subscribe" type="submit">
            Subscribe
          </button>
        </Form>
      </Formik>
    </div>
  );
};
