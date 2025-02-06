import Container from "../Container/Container.jsx";
import Logo from "../Logo/Logo.jsx";

import sprite from "../../images/sprite.svg";
import css from "./Header.module.css";
import Nav from "../Nav/Nav.jsx";

const Header = () => {
  return (
    <header>
      <Container className={css.container}>
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
