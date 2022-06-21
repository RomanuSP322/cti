import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { useHistory } from "react-router-dom";
import ScrollToTopBtn from "../ScrollToTop/ScrollToTopBtn";

import "./App.css";
const Company = React.lazy(() => import("../Company/Company"));
const Main = React.lazy(() => import("../Main/Main"));
const IETR = React.lazy(() => import("../IETR/IETR"));
const Learning = React.lazy(() => import("../Learning/Learning"));
const Databases = React.lazy(() => import("../Databases/Databases"));
const Ksptr = React.lazy(() => import("../Ksptr/Ksptr"));
const Portfolio = React.lazy(() => import("../Portfolio/Portfolio"));
const News = React.lazy(() => import("../News/News"));
const Project = React.lazy(() => import("../Project/Project"));
const Contacts = React.lazy(() => import("../Contacts/Contacts"));



function App() {
  let history = useHistory();

  history.listen((location, action) => {
    if (action === `PUSH`) 
    window.scrollTo(0, 0);
    })

  return (
    <Suspense fallback={<Preloader />}>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Main  />
          </Route>
          <Route path="/company" exact>
            <Company />
          </Route>
          <Route path="/ietr" exact>
            <IETR />
          </Route>
          <Route path="/learning" exact>
            <Learning />
          </Route>
          <Route path="/databases" exact>
            <Databases />
          </Route>
          <Route path="/ksptr" exact>
            <Ksptr />
          </Route>
          <Route path="/projects" exact>
            <Portfolio/>
          </Route>
          <Route path='/projects/:id'>
              <Project/>
        </Route>
          <Route path="/news" exact>
            <News location={'selfpage'} />
          </Route>
          <Route path="/contacts" exact>
            <Contacts />
          </Route>
        </Switch>

        <ScrollToTopBtn />
      </div>
    </Suspense>
  );
}

export default App;
