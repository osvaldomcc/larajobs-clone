import { FC } from 'react';

interface Props {
  name: string;
  height?: number;
  className?: string;
}

export const Company: FC<Props> = ({ name, height = 25, className }) => {
  return (
    <picture>
      <img
        src={require(`../../assets/company-img/${name}.svg`)}
        alt={`${name}-company`}
        height={height}
        className={`company ${className}`}
      />
    </picture>
  );
};
