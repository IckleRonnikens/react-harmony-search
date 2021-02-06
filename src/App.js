import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ReactGA from "react-ga";


import Home from './components/pages/Home';
import About from './components/pages/About';
import FanfictionList from './components/fanfiction/FanfictionList';
import Reviews from './components/reviews/Reviews'

import Fanart from './components/pages/Fanart';

import FanfictionPost from './components/fanfiction/FanfictionPost';

import ReviewsPost from './components/reviews/ReviewsPost'

import Search from './components/layout/Search';

import AppHeader from './components/layout/AppHeader';
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
          <AppHeader />
          <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/fanfiction-list"} component={FanfictionList} />
          <Route exact path="/fanfiction/:id" component={FanfictionPost} />
          <Route exact path={process.env.PUBLIC_URL + "/reviews"} component={Reviews} />
          <Route exact path={process.env.PUBLIC_URL + "/reviews/:id"} component={ReviewsPost} />

          <Route exact path={process.env.PUBLIC_URL + "/fanart"} component={Fanart} />


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