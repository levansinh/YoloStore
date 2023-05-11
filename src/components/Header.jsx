import { useRef, useEffect } from "react";
import logo from "../assets/images/Logo-2.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBagShopping,
  faUser,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
const mainNav = [
  { display: "Trang Chủ", path: "/" },
  { display: "Sản Phẩm ", path: "/catalog" },
  { display: "Tin Tức", path: "/blog" },
  { display: "Liên Hệ", path: "/contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          headerRef.current.classList.add('shrink')
      } else {
          headerRef.current.classList.remove('shrink')
      }
  })
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
