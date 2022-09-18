export const LanguageDropdown = () => {
  return (
    <div className="dropdowns">
      <button
        type="button"
        className="btn btn-outline-dark dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Language
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            English
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Russian
          </a>
        </li>
      </ul>
    </div>
  );
};

export const ThemeDropdown = () => {
  return (
    <div className="dropdowns">
      <button
        type="button"
        className="btn btn-outline-dark dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Theme
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Light
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Dark
          </a>
        </li>
      </ul>
    </div>
  );
};
