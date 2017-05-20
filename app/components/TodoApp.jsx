var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Feed the cat'
        },
        {
          id: 3,
          text: 'Learn React'
        },
        {
          id: 4,
          text: 'Impeach Trump'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    alert(`new todo: ${text}`);
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