import { useState } from "react";

import JobImg from "../../assets/job-img.png";
import Pin from "../../assets/icons/pin.svg";
import { Tag } from "../UI/Tag";
import "./css/JobListItem.css";

export const JobListItem = () => {
  const [showApply, setShowApply] = useState<boolean>(false);

  const handleShow = () => setShowApply(true);
  const handleHide = () => setShowApply(false);

  return (
    <div
      className="job-card"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      <div className="column-one">
        <figure>
          <img src={JobImg} alt="job" width={65} height={65} />
        </figure>
        <div className="job-info">
          <h1>PHP Security Analyst [APPSEC]</h1>
          <h2>Patchstack, Remote, EU Only</h2>
          <div className="job-tags">
            <Tag name="React JS" />
            <Tag name="Nest JS" />
            <Tag name="Tailwind Css" />
          </div>
        </div>
      </div>
      <div className="job-options">
        <figure>
          <img src={Pin} alt="pin" width={15} height={20} />
        </figure>
        <span>2W</span>
        <div className="apply-btn">
          {showApply && (
            <a href="#/" className="btn btn-danger-outlined" id="apply">
              Apply
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
