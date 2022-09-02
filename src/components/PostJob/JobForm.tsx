import { Formik, Form } from "formik";
import * as Yup from "yup";

import { CreateAccount } from "./CreateAccount";
import { InputText } from "../UI/InputText";

import expressions from "../../utils/regularExpressions";
import { Enhancement } from "./Enhancement";
import "./css/JobForm.css";

export const JobForm = () => {
  return (
    <div className="job-form">
      <Formik
        initialValues={{
          job: "",
          title: "Remote",
          url: "",
          tags: "",
          logo: "",
          coupon: "",
          companyName: "",
          name: "",
          userEmail: "",
          userPassword: "",
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
        validationSchema={Yup.object({
          job: Yup.string().required(),
          title: Yup.string().required(),
          url: Yup.string()
            .matches(expressions.url, "The url must be a valid url")
            .required(),
          tags: Yup.string().required(),
          coupon: Yup.string().required(),
          companyName: Yup.string().required("The company name is required"),
          name: Yup.string().required("The name is required"),
          userEmail: Yup.string()
            .email("The email must be a valid email")
            .required("The email is required"),
          userPassword: Yup.string()
            .min(6, "The password must be at least 6 characters")
            .required("The password is required"),
        })}
      >
        <Form noValidate>
          <InputText
            name="job"
            id="job"
            type="text"
            label="Job Title"
            hint="Example: Senior Laravel Developer"
          />
          <InputText
            name="title"
            id="title"
            type="text"
            label="Job Location"
            hint={`"Remote", "Remote, USA Only", "New York City"`}
          />
          <InputText
            name="url"
            id="url"
            type="url"
            label="URL to description/Application"
            hint="Example: http://yourcompany.com/careers"
          />
          <InputText
            name="tags"
            id="tags"
            type="text"
            label="Tags"
            hint="Max of 5 tags"
          />
          <InputText
            name="companyName"
            id="companyName"
            type="text"
            label="Company Name"
          />
          <InputText
            name="logo"
            id="logo"
            type="file"
            label="Company Logo"
            sublabel="(130x130 is best, but any works)"
          />
          <InputText name="coupon" id="coupon" type="text" label="Coupon" />
          <Enhancement />
          {/* Price */}
          <div className="total bg-gray">
            <h3 className="total-text">Price</h3>
            <h3 className="total-text text-green">$500</h3>
          </div>
          <CreateAccount className="mt-20" />
          <div className="actions">
            <button className="btn btn-danger-outlined" type="submit">
              Checkout
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
