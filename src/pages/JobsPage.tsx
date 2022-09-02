import { JobList } from "../components/Jobs/JobList";
import { Suscription } from "../components/UI/Suscription";
import "./css/JobsPage.css";

export const JobsPage = () => {
  return (
    <div className="job-container">
      <div className="jobs mt-50">
        <Suscription />
        <JobList />
      </div>
    </div>
  );
};
