var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var App = require('./src/components/App.js');

var appRoutes = (
  <Router history={hashHistory}>
    <Route path='/app' component={App}/>
  </Router>
);

ReactDOM.render(appRoutes, document.getElementById('content'));
