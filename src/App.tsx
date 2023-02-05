import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Layout from './pages/layout';
import Home from './pages/home';
import NotFound from './pages/not-found';
export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/layout" component={Layout}></Route>
          <Route path="/home" component={Home}></Route>
          {/* 增加一个404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}
