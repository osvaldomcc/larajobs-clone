import './PostJobAlert.css';

export const PostJobAlert = () => {
  return (
    <div className="post-alert">
      <div className="info">
        <p className="mr-5">
          🚀 Reach the largest network of Laravel/PHP developers on the
        </p>
        <span className="underlined">#1 Laravel job board.</span>
      </div>
      <div className="actions">
        <button className="btn btn-primary-outlined">Post a Job - $299</button>
        <button className="btn btn-primary-outlined-reverse">Hide</button>
      </div>
    </div>
  );
};
