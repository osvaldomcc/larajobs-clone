import { Companies } from "./Companies";
import { Navbar } from "./Navbar";
import Logo from "../../assets/logo.svg";
import "./css/Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Navbar className="mt-10" />
      <div className="content">
        <picture className="logo">
          <img src={Logo} alt="logo" height={40} />
        </picture>
        <h1 className="title">The official Laravel job board</h1>
        <p className="subtitle">
          Since 2014, the #1 Laravel job board connecting the best jobs with top
          talent.
        </p>
        <Companies />
      </div>
    </div>
  );
};
