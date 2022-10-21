import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { category } from "../redux/ChoosenCategory";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.value.products);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed"
      style={{ zIndex: "99", width: "100%" }}
    >
      <div className="container-fluid">
        <button
          className="btn btn-outline-light"
          style={{ marginRight: "40px", marginLeft: "10px" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa fa-chevron-left" aria-hidden="true"></i> Back
        </button>
        <a className="navbar-brand" href="##">
          E-commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDarkDropdown"
          style={{ justifyContent: "right" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="##"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clothings
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li
                  onClick={() => {
                    dispatch(category({ sortBy: "AllProducts" }));
                  }}
                >
                  <Link to="/AllProducts" className="dropdown-item">
                    All Products
                  </Link>
                </li>
                <li
                  onClick={() => {
                    dispatch(category({ sortBy: "men's clothing" }));
                  }}
                >
                  <Link to="/MensClothing" className="dropdown-item">
                    Men's clothing
                  </Link>
                </li>
                <li
                  onClick={() => {
                    dispatch(category({ sortBy: "women's clothing" }));
                  }}
                >
                  <Link to="/WomensClothing" className="dropdown-item">
                    Women's clothing
                  </Link>
                </li>
                <li
                  onClick={() => {
                    dispatch(category({ sortBy: "electronics" }));
                  }}
                >
                  <Link to="/Electronics" className="dropdown-item">
                    Electronics
                  </Link>
                </li>
                <li
                  onClick={() => {
                    dispatch(category({ sortBy: "jewelery" }));
                  }}
                >
                  <Link to="/Jewelery" className="dropdown-item">
                    Jewelery
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="##"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-sign-in" aria-hidden="true"></i> Autorize
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/Login">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Registration">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/">
            <button
              className="btn btn-outline-light"
              style={{ marginRight: "30px" }}
            >
              <i className="fa fa-home" aria-hidden="true"></i> Home Page
            </button>
          </Link>
          <Link to="/Cart">
            <button
              className="btn btn-outline-light btn-to-hover"
              style={{ marginRight: "20px" }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              Cart&nbsp;&nbsp;&nbsp;
              <span className="badge badge-light">{cart.length}</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
