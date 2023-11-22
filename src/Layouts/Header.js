import "../styles/_header.scss";
const Header = ({ title, banner }) => {
  return (
    <div className="header-wrapper">
      <h1 className="app-title">{title}</h1>
      <span className="app-banner">{banner}</span>
    </div>
  );
};

export default Header;
