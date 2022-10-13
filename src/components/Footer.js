import { LanguageDropdown, ThemeDropdown } from "./Dropdowns";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div className="wrapper">
        <hr />
        <div className="footer">
          <div className="footer-room-lg padding-left">
            <div className="footer-header">
              E-commerce <br></br> by Akbar Khaydarkhujaev
            </div>
          </div>
          <div className="footer-room-sm">
            <ul className="ul-res">
              <li className="list-header">Categories</li>
              <li className="list-items">Men's clothing</li>
              <li className="list-items">Women's clothing</li>
              <li className="list-items">Electronics</li>
              <li className="list-items">Jewelery</li>
            </ul>
            <ul className="ul-res">
              <li className="list-header">More</li>
              <Link to="/Cart" className="t-d-none">
                <li className="list-items">Go to Cart</li>
              </Link>
              <Link to="/Login" className="t-d-none">
                <li className="list-items">Sign In</li>
              </Link>
              <Link to="/Registration" className="t-d-none">
                <li className="list-items">Sign Up</li>
              </Link>
            </ul>
          </div>
          <div className="footer-room">
            <ul className="ul-res">
              <li className="list-header">
                Deployed Projects (Click any to visit site)
              </li>
              <li className="list-items">
                <a
                  target="_blank"
                  href="https://to-do-list-react-app-js.herokuapp.com/"
                >
                  To Do List on React
                </a>
              </li>
              <li className="list-items">
                <a
                  target="_blank"
                  href="https://draggable-todolist-react-app.herokuapp.com/"
                >
                  To Do List with Draggable Elements on React
                </a>
              </li>
              <li className="list-items">
                <a
                  target="_blank"
                  href="https://movie-react-app-js.herokuapp.com/"
                >
                  Movie App on React
                </a>
              </li>
              <li className="list-items">
                <a
                  target="_blank"
                  href="https://snake-game-pure-js.netlify.app/"
                >
                  Snake Game on Pure Js
                </a>
              </li>
            </ul>
            <ul className="ul-res">
              <li className="list-header">Contacts</li>
              <li className="list-items">+998 99 830 30 17</li>
              <li className="list-items">akbarboss91@gmail.com</li>
            </ul>
            <ul className="d-flex ul-res">
              <li className="list-items">
                <a target="_blank" href="https://t.me/AkbarBoSs91">
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-items">
                <a
                  target="_blank"
                  href="https://github.com/Akbar-Khaydarkhujayev"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li className="list-items">
                <a
                  target="_blank"
                  href="https://www.instagram.com/invites/contact/?i=9ue464ljk4z8&utm_content=jsm065p"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
