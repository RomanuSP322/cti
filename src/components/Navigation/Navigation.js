import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ loggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSidebar(false);
  }, [windowWidth]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const solutionsOpened = () => {
    setSolutions(true);
  };

  const solutionsClosed = () => {
    setSolutions(false);
    setDropdown(false);
  };

  return (
    <div className="navigation">
      <nav className="navigation__menu">
        {windowWidth > 1270 ? (
          <div className="navigation__menu_type_header">
            <ul className="navigation__list  navigation__list_type_header">
              <li className="navigation__item_type_header">
                <NavLink
                  to="/"
                  className="navigation__link navigation__link_type_header"
                  onClick={solutionsClosed}
                >
                  Главная
                </NavLink>
              </li>

              <li className="navigation__item_type_header">
                <button
                  className={`navigation__link_type_header navigation__button ${
                    dropdown + solutions ? `navigation__link_active` : ``
                  }`}
                  onClick={toggleDropdown}
                >
                  Решения{" "}
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 12 8"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      dropdown
                        ? "navigation__button-ico"
                        : " navigation__button-ico navigation__button-ico_active"
                    }
                  >
                    <g>
                      <path d="M10.5 5.31373L9.77586 6L6.05172 2.47059L2.22414 6L1.5 5.31373L6.05172 1L10.5 5.31373Z"></path>
                    </g>
                  </svg>
                </button>
                <div
                  onClick={toggleDropdown}
                  className={
                    dropdown
                      ? "navigation__item-dropdown_wrapper navigation__item-dropdown_wrapper_active"
                      : "navigation__item-dropdown_wrapper"
                  }
                >
                  <div
                    className={
                      dropdown
                        ? "navigation__item-dropdown_content navigation__item-dropdown_content_active"
                        : "navigation__item-dropdown_content"
                    }
                  >
                    <NavLink
                      to="/IETR"
                      className="navigation__link_type_dropdown"
                      activeClassName="navigation__link_type_dropdown-active"
                      onClick={solutionsOpened}
                    >
                      Интерактивные Электронные Технические Руководства
                    </NavLink>
                    <NavLink
                      to="/ksptr"
                      className=" navigation__link_type_dropdown"
                      activeClassName="navigation__link_type_dropdown-active"
                      onClick={solutionsOpened}
                    >
                      Управление Технологическими Процессами
                    </NavLink>
                    <NavLink
                      to="/databases"
                      className="navigation__link_type_dropdown"
                      activeClassName="navigation__link_type_dropdown-active"
                      onClick={solutionsOpened}
                    >
                      Корпоративные IT <br></br> Решения
                    </NavLink>
                    <NavLink
                      to="/learning"
                      className="navigation__link_type_dropdown"
                      activeClassName="navigation__link_type_dropdown-active"
                      onClick={solutionsOpened}
                    >
                      Инновационные Системы Обучения
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="navigation__item_type_header">
                <NavLink
                  to="/projects"
                  className="navigation__link navigation__link_type_header"
                  activeClassName="navigation__link_active"
                  onClick={solutionsClosed}
                >
                  Проекты
                </NavLink>
              </li>
              <li className="navigation__item_type_header">
                <NavLink
                  to="/company"
                  className="navigation__link navigation__link_type_header"
                  activeClassName="navigation__link_active"
                  onClick={solutionsClosed}
                >
                  О компании
                </NavLink>
              </li>
              <li className="navigation__item_type_header">
                <NavLink
                  to="/news"
                  className="navigation__link navigation__link_type_header"
                  activeClassName="navigation__link_active"
                  onClick={solutionsClosed}
                >
                  Новости
                </NavLink>
              </li>
              <li className="navigation__item_type_header">
                <NavLink
                  to="/contacts"
                  className="navigation__link navigation__link_type_header"
                  activeClassName="navigation__link_active"
                  onClick={solutionsClosed}
                >
                  Контакты
                </NavLink>
              </li>
              <li className="navigation__item_type_header navigation__item_type_profile navigation__item_position_right">
                <a
                  href="http://online.m-cti.ru"
                  className="navigation__link navigation__link_type_profile"
                >
                  Клиентам
                </a>
              </li>
              <div
                className={
                  dropdown
                    ? "navigation__dropdown navigation__dropdown_active"
                    : "navigation__dropdown"
                }
              ></div>
            </ul>
          </div>
        ) : (
          <div className="navigation__menu_type_burger ">
            <button
              onClick={showSidebar}
              className="navigation__button_type_burger"
            ></button>
            <div
              className={
                sidebar
                  ? "navigation__sidebar navigation__sidebar_type_opened "
                  : "navigation__sidebar "
              }
            >
              <ul className="navigation__list navigation__list_type_burger">
                <button
                  className="navigation__button_type_close"
                  onClick={showSidebar}
                ></button>

                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/"
                    exact
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Главная
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/IETR"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Интерактивные Электронные Технические Руководства
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/ksptr"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Управление Технологическими Процессами
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/databases"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Корпоративные IT Решения
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/learning"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Инновационные Системы Обучения
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/projects"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Проекты
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/company"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    О компании
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/news"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Новости
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_burger"
                  onClick={showSidebar}
                >
                  <NavLink
                    to="/contacts"
                    activeClassName="navigation__link_type_active"
                    className="navigation__link navigation__link_type_burger"
                  >
                    Контакты
                  </NavLink>
                </li>
                <li
                  className="navigation__item_type_header navigation__item_type_profile navigation__item_position_bottom"
                  onClick={showSidebar}
                >
                  <a
                    href="http://online.m-cti.ru"
                    className="navigation__link navigation__link_type_profile"
                  >
                    Клиентам
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
