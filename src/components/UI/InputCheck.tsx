import { FC } from "react";

interface Props {
  id: string;
  name: string;
  label?: string;
}

export const InputCheck: FC<Props> = ({ id, name, label }) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" name={name} id={id} />
      <span className="text-dark-gray ml-5">{label}</span>
    </label>
  );
};
