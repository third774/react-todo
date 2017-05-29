import Todo from 'Todo';
var { connect } = require('react-redux');
var TodoApi = require('TodoApi');

export var TodoList = React.createClass({

  render: function () {
    var { todos, searchText, showCompleted } = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return TodoApi.filterTodos(todos, showCompleted, searchText).map(todo => {
        return <Todo {...todo} key={todo.id} />;
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);