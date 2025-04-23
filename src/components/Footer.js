import {LINKEDIN_URL} from "../config/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>-</span>
      <a href={LINKEDIN_URL} target="_blank">
        <strong>Raema Jossy</strong>
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Food <span>Kart</span>
      </strong>
    </div>
  );
};

export default Footer;