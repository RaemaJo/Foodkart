
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://logodix.com/logo/303038.jpg" alt="Logo"  />
      </div>
      
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><FaCartArrowDown /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;