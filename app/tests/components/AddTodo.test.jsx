var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var { AddTodo } = require('AddTodo');

describe('AddTodo component', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should have at minimum an input, form, and submit button', () => {
    var addTodo = TestUtils.renderIntoDocument(<AddTodo />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    expect($el.find('input').length).toBeGreaterThanOrEqualTo(1);
    expect($el.find('form').length).toBeGreaterThanOrEqualTo(1);
    expect($el.find('button[type="submit"]').length).toBeGreaterThanOrEqualTo(1);
  });

  it('should dispatch addTodo when valid todo text', () => {
    var todoText = 'Listen to bluegrass';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    var $input = $el.find('input');
    $input.val(todoText);
    $el.find('button[type="submit"]').click();
    expect(spy).toHaveBeenCalledWith(action);
    expect($input.val()).toBe('');
  });

  it('should not dispatch addTodo when invalid todo text', () => {
    var todoText = '';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));
    var $input = $el.find('input');
    $input.val(todoText);
    $el.find('button[type="submit"]').click();
    expect(spy).toNotHaveBeenCalled();
    expect($input.val()).toBe('');
  });
});