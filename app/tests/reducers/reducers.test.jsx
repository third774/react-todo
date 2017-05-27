var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers', () => {

  describe('searchText reducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchText(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompleted reducer', () => {
    it('should set showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
        showCompleted: true
      };
      var res = reducers.showCompleted(df(false), df(action));
      expect(res).toBe(action.showCompleted);
    });
  });

});