var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// App CSS
require('applicationStyles')

$(document).foundation();

ReactDOM.render(
  <p>Boilerplate 3 project</p>
, document.getElementById('app'));