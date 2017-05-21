var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    }
  },

  componentDidUpdate: function() {
    TodoApi.setTodos(this.state.todos);
  },

  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },

  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  handleSearch: function(showCompleted, searchText) {
    var newState = {
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    };
    this.setState(newState);
  },

  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}></TodoList>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;