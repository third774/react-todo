module.exports = {
  setTodos: function(todos) {
    if (todos instanceof Array) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      
    }
    return todos instanceof Array ? todos : [];
  }
};