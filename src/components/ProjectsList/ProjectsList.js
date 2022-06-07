import React, { useEffect, useState } from 'react';
import { Route, Link, useRouteMatch  } from 'react-router-dom';

import './ProjectsList.css';

function ProjectsList({projects}) {
  const { path } = useRouteMatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsPerPage, setCardsPerPage] = useState(null);
  const [next, setNext] = useState(null);
  const [currentCards, setcurrentCards] = useState(0);
  const [cardsToRender, setcardsToRender] = useState([]);
  const [moreBtnActive, setMoreBtnActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (windowWidth >= 2480) {
      setCardsPerPage(12);
      setNext(4);
      return;
    }
    if (windowWidth < 2480 && windowWidth > 1880) {
      setCardsPerPage(9);
      setNext(3);
      return;
    }
    if (windowWidth <= 1880 && windowWidth > 930) {
      setCardsPerPage(8);
      setNext(2);
      return;
    }
    if (windowWidth < 930) {
      setCardsPerPage(5);
      setNext(2);
      return;
    }
  }, [windowWidth]);


  useEffect(() => {
    const count = Math.min(projects.length, cardsPerPage);
    setcardsToRender(projects.slice(0, count));
    setcurrentCards(count);
  }, [cardsPerPage, projects]);



  useEffect(() => {
    if (currentCards >= projects.length || currentCards === 0) {
      setMoreBtnActive(false);
    } else {
      setMoreBtnActive(true);
    }
  }, [currentCards, projects]);


  const renderWithSlice = () => {
    const count = currentCards + next;
    const extraMovies = projects.slice(currentCards, count);
    setcardsToRender([...cardsToRender, ...extraMovies]);
    setcurrentCards(count);
  };


    return (
      <div className='projectslist-wrapper'>
          <div className='projectslist'>
          {cardsToRender.map((item) =>
          <div key={item.id} className='projectslist__card'> 
        <Link to={`${path}/${item.id}`} className='projectslist__link'>
          <div className='projectslist__image-wrapper'>
          <img src={item.poster} className='projectslist__card-poster'/>
          <p className='projectslist__about-span'>Подробнее</p>
          </div>          
          <h2 className='projectslist__card-title'>{item.title}</h2>
       
          </Link>        

</div>
  )}
   
      </div>
      {moreBtnActive && (
        <button
          className='projectlist__button'
          type='button'
          onClick={renderWithSlice}
        >
          Ещё
        </button>
      )}
      </div>
    );
   
  }
  
  export default ProjectsList;