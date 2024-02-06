import FeatherIcon from 'feather-icons-react';
import './Header.scss';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrollHeader, setIsScrollHeader] = useState(false);
  const [navItemClicked, setNavItemClicked] = useState('accueil');

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 80) {
        setIsScrollHeader(true);
      } else {
        setIsScrollHeader(false);
      }
    };
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <header
      className={isScrollHeader ? 'header scroll-header' : 'header'}
      id="header"
    >
      <nav className="nav container">
        <a href="#accueil" className="nav__logo">
          Lilian Marechau
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                onClick={() => {
                  setNavItemClicked('accueil');
                }}
                href="#accueil"
                className={
                  navItemClicked === 'accueil'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="bx bx-home-alt nav__icon" />
                <span className="nav__name">Accueil</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => {
                  setNavItemClicked('about');
                }}
                href="#about"
                className={
                  navItemClicked === 'about'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="bx bx-user nav__icon" />
                <span className="nav__name">À Propos</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => {
                  setNavItemClicked('skills');
                }}
                href="#skills"
                className={
                  navItemClicked === 'skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="bx bx-book-alt nav__icon" />
                <span className="nav__name">Compétences</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => {
                  setNavItemClicked('projets');
                }}
                href="#projets"
                className={
                  navItemClicked === 'projets'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="bx bx-briefcase-alt nav__icon" />
                <span className="nav__name">Projets</span>
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => {
                  setNavItemClicked('contact');
                }}
                href="#contact"
                className={
                  navItemClicked === 'contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="bx bx-message-square-detail nav__icon" />
                <span className="nav__name">Contacter</span>
              </a>
            </li>
          </ul>
        </div>

        <img src="./public/picture.jpeg" alt="" className="nav__img" />
      </nav>
    </header>
  );
}

export default Header;
