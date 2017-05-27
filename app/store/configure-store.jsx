var redux = require('redux');
var {searchText, showCompleted, todos} = require('reducers');

export function configure() {
  var reducer = redux.combineReducers({
    searchText, showCompleted, todos
  });

  return redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}