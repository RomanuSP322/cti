import React, {  useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import {  useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Company from '../Company/Company';
import Main from '../Main/Main';
import IETR from '../IETR/IETR';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTopBtn';
import Learning from '../Learning/Learning';


function App() {

  
  return (
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
            </Switch> 
            <ScrollToTopBtn/>           
      </div>
  );
}

export default App;
