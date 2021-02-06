import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ReactGA from "react-ga";

import Dashboard from './components/layout/Dashboard';

import FanfictionProfile from './components/fanfiction/FanfictionProfile';

import ReviewsPost from './components/reviews/ReviewsPost'

import Search from './components/layout/Search';

import AppFooter from './components/layout/AppFooter';
import AppNavbar from './components/layout/AppNavbar';
import NotFound from './components/pages/NotFound';

export default class App extends React.Component {
  constructor() {
    super();
    ReactGA.initialize("UA-111422776-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {

    return (
      <div>
        <Router>
        <AppNavbar />

        <div className="App">
          <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Dashboard} />
        
            <Route exact path="/fanfiction/profiles" component={FanfictionProfile} />
            
            <Route exact path={process.env.PUBLIC_URL + "/reviews/:id"} component={ReviewsPost} />

            <Route exact path="/search" component={Search} />
            <Route exact path="*" component={NotFound} /> 
          </Switch>
          <AppFooter />
        </div>
      </Router>
    </div>
    );
  }
}