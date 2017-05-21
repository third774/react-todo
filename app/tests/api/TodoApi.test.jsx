var expect = require('expect');
var TodoApi = require('TodoApi');

describe('TodoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 1,
        text: 'Do the dishes',
        completed: false
      }];
      TodoApi.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var todos = {foo: true};
      TodoApi.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(localStorage.getItem('todos')).toBe(null);
      
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 1,
        text: 'Do the dishes',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'Go to the store',
        completed: true
      },{
        id: 2,
        text: 'Feed the dog',
        completed: false
      },{
        id: 3,
        text: 'Clean the house',
        completed: true
      }
    ]

    it('should return all items if show completed is true', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

    it('should only return items not completed if show completed is true', () => {
      var filteredTodos = TodoApi.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      var completedFound = false;
      filteredTodos.forEach(todo => {
        if (todo.completed) completedFound = true;
        if (completedFound) {
          expect(todo.completed).toBe(true);
        } else {
          expect(todo.completed).toBe(false);
        }
      });
    });

    it('should return all items with searchText contained', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, 'clean');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all items when searchText is empty', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

  });
});