import "../styles/_header.scss";
const Header = () => {
  return (
    <div className="header-wrapper">
      <h1 className="app-title">Simple, traffic-based pricing</h1>
      <span className="app-banner">
        Sign-up for our 30-day trial. No credit card required.
      </span>
    </div>
  );
};

export default Header;
