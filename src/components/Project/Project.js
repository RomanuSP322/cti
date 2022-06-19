import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from  '../../consts/portfolioData';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Project.css';

function Project() {
  let { id } = useParams(); 

  const project = projects.find(f => f.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <section className="project">
   
          <Header/>   
     
        <div className="project__card">
        <div className="project__content">
            <h2 className="project__title">{project.title}</h2>
          <img className="project__image_wide" src={project.imagewide} alt={project.title}/>
          <div className="project__details">
            <div className="project__column_left">
            <img className="project__image_notebook" src={project.imagescreen} alt={project.title}/>
            </div>
            <div className="project__column_right">
              <div className="project__detail-wrapper">
                <h3 className="project__detail-title">Год</h3>
                <p className="project__detail-info">{project.year}</p>
                </div>
                <div className="project__detail-wrapper">
                <h3 className="project__detail-title">Заказчик</h3>
                <p className="project__detail-info">{project.client}</p>
                </div>
                <div className="project__detail-wrapper">
                {/* <h3 className="project__detail-title">Цель</h3> */}
                <p className="project__detail-info">{project.mission}</p>
                </div>
                <div className="project__detail-wrapper project__details-solution">
                  { project.solutiontitle ? <h3 className="project__detail-title">{project.solutiontitle}</h3> : null }
               
                <p className="project__detail-info">{project.solution}</p>
                </div>
            </div>
          </div>
          </div>
          </div>
        <Footer theme={'dark'}/>
      </section>
  );
}

export default Project; 