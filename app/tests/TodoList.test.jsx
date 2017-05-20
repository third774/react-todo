var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render a Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something'
      }, {
        id: 2,
        text: 'Walk the dog'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(2);
  });
});