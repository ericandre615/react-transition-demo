import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import Layout from './components/layout.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import NoRoute from './components/noroute.jsx';

export default (
  <Route name="app" path="/public" component={ Layout }>
    <IndexRoute component={Home} key="home" />
    <Route path="/about" component={ About } key="about" />
    <Route path="*" component={ NoRoute } key="fourOFour" />
  </Route>
);
