import "./css/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <a href="#!" className="text-dark-gray">
          Home
        </a>
        <a href="#!" className="text-dark-gray">
          Contact
        </a>
        <a href="#!" className="text-dark-gray">
          Partner
        </a>
        <a href="#!" className="text-dark-gray">
          RSS
        </a>
        <a href="#!" className="text-dark-gray">
          Twitter
        </a>
      </div>
      <div className="copyright mt-10">
        <p className="text-dark-gray">
          Built by UserScape in partnership with Laravel News
        </p>
        <p className="text-dark-gray mt-5">© 2014 - 2022</p>
      </div>
    </footer>
  );
};
