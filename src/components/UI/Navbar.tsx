import { FC } from "react";

import { Icon } from "./Icon";
import "./css/Navbar.css";
import Logo from "../../assets/logo.svg";

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={`navbar ${className}`}>
      {/* Social */}
      <div className="social">
        <Icon name="rss" />
        <Icon name="twitter" />
        <button className="btn btn-social" type="button">
          Partner
        </button>
        <button className="btn btn-social" type="button">
          Account
        </button>
      </div>
      {/* Logo */}
      <picture className="logo-image">
        <img src={Logo} alt="logo" height={40} />
      </picture>
      <div className="fill-space"></div>
      {/* Post Job */}
      <button type="button" className="btn btn-primary-outlined fixed-top">
        Post a Job
      </button>
    </nav>
  );
};
