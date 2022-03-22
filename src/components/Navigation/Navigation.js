import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setSidebar(false);
  }, [windowWidth]);

  return (
    <div className='navigation'>
      <nav className='navigation__menu'>
        
        {
          (windowWidth > 768 ? (
            <div className='navigation__menu_type_header'>
              <ul className='navigation__list  navigation__list_type_header'>
                <li className='navigation__item_type_header'>
                  <NavLink
                    to='/'
                    className='navigation__link navigation__link_type_header'
                  >
                    Главная
                  </NavLink>
                </li>
                <li className='navigation__item_type_header'>
                  <NavLink
                    to='/saved-movies'
                    className='navigation__link navigation__link_type_header'
                  >
                    
                  </NavLink>
                </li>
                <li className='navigation__item_type_header'>
                  <NavLink
                    to='/IETR'
                    className='navigation__link navigation__link_type_header'
                  >
                    Решения
                  </NavLink>
                </li>
                <li className='navigation__item_type_header'>
                  <NavLink
                    to='/saved-movies'
                    className='navigation__link navigation__link_type_header'
                  >
                    
                  </NavLink>
                </li>
                <li className='navigation__item_type_header'>
                  <NavLink
                    to='/company'
                    className='navigation__link navigation__link_type_header'
                  >
                    О компании
                  </NavLink>
                </li>
                <li className='navigation__item_type_header'>
                  <NavLink
                    to='#'
                    className='navigation__link navigation__link_type_header'
                  >
                    Контакты
                  </NavLink>
                </li>
                <li className='navigation__item_type_header navigation__item_type_profile navigation__item_position_right'>
                  <NavLink
                    to='/profile'
                    className='navigation__link navigation__link_type_profile'
                  >
                    Клиентам
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className='navigation__menu_type_burger '>
              <button
                onClick={showSidebar}
                className='navigation__button_type_burger'
              ></button>
              <div
                className={
                  sidebar
                    ? 'navigation__sidebar navigation__sidebar_type_opened '
                    : 'navigation__sidebar '
                }
              >
                <ul className='navigation__list navigation__list_type_burger'>
                  <button
                    className='navigation__button_type_close'
                    onClick={showSidebar}
                  ></button>

                  <li
                    className='navigation__item_type_burger'
                    onClick={showSidebar}
                  >
                    <NavLink
                      to='/'
                      exact
                      activeClassName='navigation__link_type_active'
                      className='navigation__link navigation__link_type_burger'
                    >
                      Главная
                    </NavLink>
                  </li>
                  <li
                    className='navigation__item_type_burger'
                    onClick={showSidebar}
                  >
                    <NavLink
                      to='/movies'
                      activeClassName='navigation__link_type_active'
                      className='navigation__link navigation__link_type_burger'
                    >
                      Фильмы
                    </NavLink>
                  </li>
                  <li
                    className='navigation__item_type_burger'
                    onClick={showSidebar}
                  >
                    <NavLink
                      to='/saved-movies'
                      activeClassName='navigation__link_type_active'
                      className='navigation__link navigation__link_type_burger'
                    >
                      Сохранённые фильмы
                    </NavLink>
                  </li>
                  <li
                    className='navigation__item_type_header navigation__item_type_profile navigation__item_position_bottom'
                    onClick={showSidebar}
                  >
                    <NavLink
                      to='/profile'
                      className='navigation__link navigation__link_type_profile'
                    >
                      Аккаунт
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </nav>
    </div>
  );
}

export default Navigation;
