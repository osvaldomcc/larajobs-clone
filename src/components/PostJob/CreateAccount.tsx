import { FC } from "react";

import { InputText } from "../UI/InputText";

import "./css/CreateAccount.css";

interface Props {
  className?: string;
}

export const CreateAccount: FC<Props> = ({ className }) => {
  return (
    <div className={`create-account card bg-lightest-blue ${className}`}>
      <div className="create-content">
        <h4 className="create-account-title">Create an Account</h4>
        <p className="create-account-subtitle text-dark-gray">
          To login and edit the listing later.
        </p>

        <InputText
          id="name"
          type="text"
          label="Your Name"
          name="name"
          className="bg-white"
        />
        <InputText
          id="userEmail"
          type="email"
          label="Your Email"
          name="userEmail"
          className="bg-white"
        />
        <InputText
          id="userPassword"
          type="password"
          label="Password"
          name="userPassword"
          className="bg-white"
        />
      </div>
    </div>
  );
};
