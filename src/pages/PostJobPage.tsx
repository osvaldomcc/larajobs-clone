import { JobForm } from "../components/PostJob/JobForm";
import { LoginForm } from "../components/PostJob/LoginForm";
import { Companies } from "../components/UI/Companies";
import { Avatar } from "../components/UI/Avatar";
import LNews from "../assets/laravel-news.svg";
import MattImg from "../assets/matt2.jpg";
import "./css/PostJob.css";

export const PostJobPage = () => {
  return (
    <div className="post-job-content">
      <div className="post-job mt-20">
        <div className="container">
          <div className="forms">
            <LoginForm />
            <JobForm />
          </div>
          <div className="feeds">
            <h1 className="feeds-titles">
              The official Laravel job board since 2014. Trusted by thousands of
              companies.
            </h1>
            <div className="mt-20"></div>
            <Companies />
            <div className="mb-40"></div>
            <hr />
            <p className="feeds-news feeds-titles">
              Exclusively syndicated across the{" "}
              <a href="https://laravel-news.com" className="mr-5">
                Laravel News
              </a>
              website/newsletter to millions of readers
            </p>
            <img src={LNews} alt="laravel-news" className="laravel-news" />
            <hr />
            <p className="feeds-titles mt-40 mb-40">
              Emailed to 40,000+ Laravel developers
            </p>
            <hr />
            <p className="feeds-titles mt-40 mb-40">From $299 for 30 days</p>
            <hr />
            <div className="avatar-img mt-40 mb-10">
              <Avatar src={MattImg} alt="mat-img" />
            </div>
            <div className="client-comment mb-40">
              <p className="mb-10">
                “Listing our jobs through LaraJobs was simple, quick, and helped
                us find amazing candidates.
              </p>
              <span className="higlight-text">
                We've now hired three times through LaraJobs and we'll
                absolutely use it again!”
              </span>
              <span className="client-info mt-20">
                <a
                  className="underlined"
                  href="https://twitter.com/stauffermatt"
                >
                  Matt Stauffer
                </a>
                , Tighten Co.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
