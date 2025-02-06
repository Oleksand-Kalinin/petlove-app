import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/notices">
            Find pet
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
