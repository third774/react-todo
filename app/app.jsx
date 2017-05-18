var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// App CSS
require('applicationStyles')

$(document).foundation();

ReactDOM.render(
  <TodoApp></TodoApp>
, document.getElementById('app'));