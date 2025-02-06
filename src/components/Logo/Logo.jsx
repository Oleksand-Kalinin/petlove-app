import { Link, useLocation } from "react-router-dom";

import sprite from "../../images/sprite.svg";
import css from "./Logo.module.css";
import clsx from "clsx";

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Link className={clsx(css.link, { [css.inverted]: isHomePage })} to="/">
      petl{" "}
      <svg className={css.icon}>
        <use href={`${sprite}#heart-circle-icon`}></use>
      </svg>{" "}
      ve
    </Link>
  );
};

export default Logo;
