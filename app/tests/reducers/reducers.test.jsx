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

  describe('todos reducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Go to the store'
      };
      var res = reducers.todos(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });

    it('should add an array of todos', () => {
      var todos = [
        {
          id: 111,
          text: 'anything',
          completed: false,
          createdAt: 123,
          completedAt: undefined
        }
      ];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todos(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should set completed boolean true and update completedAt time if marking completed', () => {
      var todo = {
        id: 'aaowejfoaiwejfoiawj',
        text: 'Walk the dog',
        completed: false,
        createdAt: 1123,
        completedAt: undefined
      };
      var todosState = [todo];
      var action = {
        type: 'TOGGLE_TODO',
        id: todo.id
      };
      var res = reducers.todos(df(todosState), df(action));
      expect(res.length).toBe(todosState.length);
      expect(res[0].completed).toBe(true);
      expect(isNaN(res[0].completedAt)).toBe(false);
    });

    it('should set completed boolean false and completedAt undefined if marking not completed', () => {
      var todo = {
        id: 'aaowejfoaiwejfoiawj',
        text: 'Walk the dog',
        completed: true,
        createdAt: 1123,
        completedAt: 1231231
      };
      var todosState = [todo];
      var action = {
        type: 'TOGGLE_TODO',
        id: todo.id
      };
      var res = reducers.todos(df(todosState), df(action));
      expect(res.length).toBe(todosState.length);
      expect(res[0].completed).toBe(false);
      expect(isNaN(res[0].completedAt)).toBe(true);
    });
  })

});