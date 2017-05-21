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
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter(todo => showCompleted ? true : !todo.completed);
    
    // Filter by searchText
    filteredTodos = filteredTodos.filter(todo => todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1);

    // Sort todos with incomplete first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};