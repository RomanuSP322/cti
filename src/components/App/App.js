import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Company from '../Company/Company';
import Main from '../Main/Main';
import IETR from '../IETR/IETR';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn';
import Learning from '../Learning/Learning';
import Databases from '../Databases/Databases';
import Ksptr from '../Ksptr/Ksptr';
import './App.css';

function App() {

  
  return (
          <div className='app'>
              <Suspense fallback={<Preloader/>}>
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
            </Suspense>
            <ScrollToTopBtn/>           
      </div>
  );
}

export default App;
