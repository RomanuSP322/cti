import React from 'react';
import { Route, Link, useRouteMatch  } from 'react-router-dom';

import './ProjectsList.css';

function ProjectsList({projects}) {
  const { path } = useRouteMatch();

    return (
      <div className='projectslist-wrapper'>
          <div className='projectslist'>
          {projects.map((item) =>
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
      </div>
    );
   
  }
  
  export default ProjectsList;