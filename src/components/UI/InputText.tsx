import { FC } from "react";
import { ErrorMessage, useField } from "formik";

import "./css/InputText.css";

interface Props {
  name: string;
  id: string;
  type: "tel" | "text" | "search" | "url" | "password" | "email" | "file";
  label?: string;
  sublabel?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
  className?: string;
  hint?: string;
  [key: string]: any;
}

export const InputText: FC<Props> = ({
  label,
  sublabel,
  hint,
  className,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <div>
      {label && (
        <label htmlFor={props.id} className="form-label text-black">
          {label} <span className="form-sublabel">{sublabel}</span>
        </label>
      )}
      <input
        autoComplete="off"
        className={`form-input ${className}`}
        {...field}
        {...props}
      />
      <p className="text-dark-gray">{hint}</p>
      <ErrorMessage
        name={props.name}
        className="form-error-item"
        component="div"
      />
    </div>
  );
};
