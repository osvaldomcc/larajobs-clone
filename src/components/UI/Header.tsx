import { Companies } from "./Companies";
import "./css/Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="content">
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
