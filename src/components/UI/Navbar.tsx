import { FC } from "react";
import { Link } from "react-router-dom";

import { Icon } from "./Icon";
import Logo from "../../assets/logo.svg";
import { useNavigation } from "../../hooks/useNavigation";
import "./css/Navbar.css";

interface Props {
  className?: string;
  hidePostJob?: boolean;
}

export const Navbar: FC<Props> = ({ className, hidePostJob }) => {
  const { handleNavigation } = useNavigation();

  return (
    <>
      <nav className={`navbar ${className}`}>
        {/* Social */}
        <div className="social">
          <Icon name="rss" />
          <Icon name="twitter" />
          <button className="btn btn-social" type="button">
            Partner
          </button>
          <button
            className="btn btn-social"
            type="button"
            onClick={() => handleNavigation("/login")}
          >
            Account
          </button>
        </div>
        {/* Logo */}
        <Link to="/">
          <picture className="logo-image">
            <img src={Logo} alt="logo" height={40} />
          </picture>
        </Link>
        <div className="fill-space"></div>
        {/* Post Job */}
        {!hidePostJob && (
          <button
            onClick={() => handleNavigation("/post-a-job")}
            type="button"
            className="btn btn-primary-outlined fixed-top"
          >
            Post a Job
          </button>
        )}
      </nav>
      <Link to="/">
        <picture className="logo">
          <img src={Logo} alt="logo" height={40} />
        </picture>
      </Link>
    </>
  );
};
