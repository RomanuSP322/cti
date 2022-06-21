import React from 'react';
import { useHistory } from "react-router-dom";
import MoreBtn from '../MoreBtn/MoreBtn';
import './Solutions.css';

function Solution({ classy, text, image, path }) {
  return (
    <>
      <div className={classy}>
        <div className='solution__content'>
          <img
            src={image}
            alt='img'
            className='solution__image'
            draggable='false'          
          />

          <div className='solution__text'>
            <p className='solution__about'>{text}</p>
          </div>
          <div className='solution__btn-more'>
            <MoreBtn direction={path} text={`Подробнее`} />
          </div>
        </div>
      </div>
    </>
  );
}

const Solutions = ({ solutions }) => {
  const [cur, setCur] = React.useState(0);
  let history = useHistory();

  function handleClick(path) {
    history.push(`/${path}`);
  }

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = solutions.length - 1;
    } else if (newIndex >= solutions.length) {
      newIndex = 0;
    }

    setCur(newIndex);
  };

  const nextMoving = () => {
    if (cur >= solutions.length - 1) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };

  return (
    <section className='solutions'>
      {!solutions || solutions.length === 0 ? null : (
        <>
          <h2 className='solutions__title'>Решения</h2>

          {solutions.map((solution, idx) => {
            return (
              <Solution
                classy={idx === cur ? 'solution solution_active' : 'solution'}
                key={idx}
                {...solution}
                nextMoving={nextMoving}
              />
            );
          })}

          <div className='solutions__indicators'>
            {solutions.map((solution, index) => {
              return (
                <button
                  key={index}
                  className={`solutions__indicator ${
                    index === cur ? 'solutions__indicator_active' : ''
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                  onDoubleClick={()=> handleClick(solution.path)}
                >
                  <img
                    src={`${index === cur ? solution.activeico : solution.ico}`}
                    alt='img'
                    className='solution__ico'
                    draggable='false'
                  />
                  <p className='solution__title'>{solution.title}</p>
                </button>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Solutions;
