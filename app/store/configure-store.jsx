var redux = require('redux');
var {searchText, showCompleted, todos} = require('reducers');

export function configure(initialState = {}) {
  var reducer = redux.combineReducers({
    searchText, showCompleted, todos
  });

  return redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}