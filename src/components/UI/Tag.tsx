import { FC } from "react";

import "./css/Tag.css";

interface Props {
  name: string;
}

export const Tag: FC<Props> = ({ name }) => {
  return (
    <div className="tag">
      <span>{name}</span>
    </div>
  );
};
