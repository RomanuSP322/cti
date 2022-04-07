import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn'; 
import './App.css';
const Company = React.lazy(() => import('../Company/Company'));
const Main = React.lazy(() => import('../Main/Main'));
const IETR = React.lazy(() => import('../IETR/IETR'));
const Learning = React.lazy(() => import('../Learning/Learning'));
const Databases = React.lazy(() => import('../Databases/Databases'));
const Ksptr = React.lazy(() => import('../Ksptr/Ksptr'));


function App() {

  
  return (
    <Suspense fallback={<Preloader />}>
          <div className='app'>

            <Switch>
            <Route path='/' exact>
             <Main />
            </Route>  
            <Route path='/company'  exact >
             <Company />
          </Route>
          <Route path='/ietr'  exact >
             <IETR />
          </Route>
          <Route path='/learning'  exact >
             <Learning />
          </Route>
          <Route path='/databases'  exact >
             <Databases />
          </Route>
          <Route path='/ksptr'  exact >
             <Ksptr />
          </Route>
            </Switch> 
            
            <ScrollToTopBtn/>           
      </div>
      </Suspense>
  );
}

export default App;
