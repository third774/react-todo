var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Feed the cat'
        },
        {
          id: uuid(),
          text: 'Learn React'
        },
        {
          id: uuid(),
          text: 'Impeach Trump'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    var newState = {
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    };
    console.log(newState);
    this.setState(newState);
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}></TodoList>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;