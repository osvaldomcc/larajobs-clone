import { FC } from "react";
import "./css/InputText.css";

interface Props {
  name: string;
  id: string;
  type: "tel" | "text" | "search" | "url" | "password" | "email";
  label?: string;
  value?: string | number | readonly string[] | undefined;
  placeholder?: string;
}

export const InputText: FC<Props> = ({
  name,
  id,
  type,
  label,
  value,
  placeholder,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label text-black">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="form-input"
        placeholder={placeholder}
      />
    </div>
  );
};
