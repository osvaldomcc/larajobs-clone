import { FC, useState } from "react";
import "./css/PostJobAlert.css";

interface Props {
  show?: boolean;
}

export const PostJobAlert: FC<Props> = ({ show = true }) => {
  //State to handle the alert
  const [showAlert, setShowAlert] = useState<boolean>(show);

  //Func to hide the alert onClick
  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div className="post-alert">
          <div className="info">
            <p className="mr-5">
              🚀 Reach the largest network of Laravel/PHP developers on the
            </p>
            <span className="underlined">#1 Laravel job board.</span>
          </div>
          <div className="actions">
            <button className="btn btn-primary-outlined">
              Post a Job - $299
            </button>
            <button
              className="btn btn-primary-outlined-reverse"
              onClick={hideAlert}
            >
              Hide
            </button>
          </div>
        </div>
      )}
    </>
  );
};
