import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import clsx from "clsx";

const Nav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.activeLink);
  };

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="/news">
            News
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="/notices">
            Find pet
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
