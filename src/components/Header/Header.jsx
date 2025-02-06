import Container from "../Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";

import sprite from "../../images/sprite.svg";
import css from "./Header.module.css";
import Nav from "../Nav/Nav.jsx";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className={css.header}>
      <Container
        className={clsx(css.container, {
          [css.acceptBgColorOrange]: isHomePage,
        })}
      >
        <Logo />
        <Nav />
        <button className={css.menuBtn} type="button">
          <svg className={css.menuIcon}>
            <use href={`${sprite}#menu-icon`}></use>
          </svg>
        </button>
      </Container>
    </header>
  );
};

export default Header;
