module.exports = {
  setTodos: function(todos) {
    if (todos instanceof Array) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
};