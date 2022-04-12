import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='navigation'>
      <nav className='navigation__menu'>
        {windowWidth > 768 ? (
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
                ></NavLink>
              </li>
              <li className='navigation__item_type_header'>
                <button
                  className={`navigation__link_type_header navigation__button ${dropdown ? `navigation__link_active` : ``}`}
                  onClick={toggleDropdown}
                >
                  Решения{' '}
                  <svg width="14" height="10" viewBox="0 0 12 8" fill="white" xmlns="http://www.w3.org/2000/svg"  className={
                    dropdown
                      ? 'navigation__button-ico'
                      : ' navigation__button-ico navigation__button-ico_active'
                  }>
					<g >
						<path d="M10.5 5.31373L9.77586 6L6.05172 2.47059L2.22414 6L1.5 5.31373L6.05172 1L10.5 5.31373Z"></path>
					</g>
	
				</svg>
                </button>
                <div
                  onClick={toggleDropdown}
                  className={
                    dropdown
                      ? 'navigation__item-dropdown_wrapper navigation__item-dropdown_wrapper_active'
                      : 'navigation__item-dropdown_wrapper'
                  }
                >
                  <div className={
                    dropdown
                      ? 'navigation__item-dropdown_content navigation__item-dropdown_content_active'
                      : 'navigation__item-dropdown_content'
                  }>
                    <NavLink
                      to='/IETR'
                      className='navigation__link_type_dropdown'
                    >
                      Интерактивные Электронные Технические Руководства
                    </NavLink>
                    <NavLink
                      to='/ksptr'
                      className=' navigation__link_type_dropdown'
                    >
                      Управление Технологическими Процессами
                    </NavLink>
                    <NavLink
                      to='/databases'
                      className='navigation__link_type_dropdown'
                    >
                      Корпоративные Базы<br></br> Данных
                    </NavLink>
                    <NavLink
                      to='/learning'
                      className='navigation__link_type_dropdown'
                    >
                      Инновационные Системы Обучения
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className='navigation__item_type_header'>
                <NavLink
                  to='/projects'
                  className='navigation__link navigation__link_type_header'
                >Проекты</NavLink>
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
                  to='/news'
                  className='navigation__link navigation__link_type_header'
                >
                  Новости
                </NavLink>
              </li>
              <li className='navigation__item_type_header'>
                <NavLink
                  to='/contacts'
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
              <div
                className={
                  dropdown
                    ? 'navigation__dropdown navigation__dropdown_active'
                    : 'navigation__dropdown'
                }
              
              ></div>
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
        )}
      </nav>
    </div>
  );
}

export default Navigation;
