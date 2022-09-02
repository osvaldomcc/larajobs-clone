import { FC } from "react";
import "./css/Avatar.css";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Avatar: FC<Props> = ({ src, alt, height = 160, width = 160 }) => {
  return (
    <figure className="avatar" style={{ height, width }}>
      <img src={src} alt={alt} />
    </figure>
  );
};
