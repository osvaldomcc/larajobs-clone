import { FC } from "react";

interface Props {
  name: "rss" | "twitter" | "pin";
  size?: number;
}

export const Icon: FC<Props> = ({ name, size = 24 }) => {
  return (
    <a href="#!">
      <picture>
        <img
          src={require(`../../assets/icons/${name}.svg`)}
          alt={`${name}-icon`}
          height={size}
          width={size}
        />
      </picture>
    </a>
  );
};
