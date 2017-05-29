var { connect } = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({

  handleSubmit: function (e) {
    var { dispatch } = this.props;
    e.preventDefault();
    var text = this.refs.text.value;
    this.refs.text.value = ''
    if (text !== '') {
      dispatch(actions.addTodo(text));
    } else {
      this.refs.text.focus();
    }
  },

  render: function () {

    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="text" placeholder="What do you need to do?" />
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

export default connect()(AddTodo);