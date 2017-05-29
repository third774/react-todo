var expect = require('expect');
var actions = require('actions');

describe('actions', () => {

  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'foo'
    };

    var generatedAction = actions.setSearchText('foo');
    expect(generatedAction).toEqual(action);
  });

  it('should generate addTodo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'foo'
    };

    var generatedAction = actions.addTodo('foo');
    expect(generatedAction).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var generatedAction = actions.toggleShowCompleted();
    expect(generatedAction).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 'foo'
    };

    var generatedAction = actions.toggleTodo('foo');
    expect(generatedAction).toEqual(action);
  });

  it('should generate addTodos action', () => {
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
    var generatedAction = actions.addTodos(todos);
    expect(generatedAction).toEqual(action);
  });

});