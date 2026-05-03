import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const footerIcons = {
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
    MdPlace: <MdPlace />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curEle, id) => {
          const { title, icon, details } = curEle;

          return (
            <div className="footer-contact" key={id}>
              <div className="icon">{footerIcons[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2026, All Right Reserved
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                <NavLink to="https://github.com/deshmukht05" target="_blank">GitHub</NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com/in/tushar-deshmukh-3511a0223/" target="_blank">LinkedIn</NavLink>
              </li>
              <li>
                <NavLink to="https://github.com/deshmukht05/World_Atlas_ReactJS.git" target="_blank">Source Code</NavLink>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
