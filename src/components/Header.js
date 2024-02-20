import logoAddress from "../../public/logo.jpg";

const Title = () => {
  return (
    <a href="/">
      <img src={logoAddress} alt="QuickFoodLogo" className="logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-container">
        <ul>
          <li className="nav-items">
            <a href="">Home</a>
          </li>
          <li className="nav-items">
            <a href="">About</a>
          </li>
          <li className="nav-items">
            <a href="">contact us</a>
          </li>
          <li className="nav-items">
            <a href="">cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
