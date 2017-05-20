var AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.text.value;
    this.refs.text.value = ''
    if (text !== '') {
      this
        .props
        .onAddTodo(text);
    } else {
      this.refs.text.focus();
    }
  },

  render: function () {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="text" placeholder="What do you need to do?"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;