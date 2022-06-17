import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__brand">Random Activity</div>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink
                to="/"
                exact
                activeClassName="header__link--active"
                className="header__link"
              >
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/favorites"
                activeClassName="header__link--active"
                className="header__link"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
