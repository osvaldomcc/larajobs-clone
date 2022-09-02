import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Icon } from "./Icon";
import Logo from "../../assets/logo.svg";
import "./css/Navbar.css";

interface Props {
  className?: string;
  hidePostJob?: boolean;
}

export const Navbar: FC<Props> = ({ className, hidePostJob }) => {
  const navigate = useNavigate();

  const handlePostJob = () => {
    navigate("/post-a-job");
  };

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
          <Link to="/login">
            <button className="btn btn-social" type="button">
              Account
            </button>
          </Link>
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
            onClick={handlePostJob}
            type="button"
            className="btn btn-primary-outlined fixed-top"
          >
            Post a Job
          </button>
        )}
      </nav>
      <picture className="logo">
        <img src={Logo} alt="logo" height={40} />
      </picture>
    </>
  );
};
