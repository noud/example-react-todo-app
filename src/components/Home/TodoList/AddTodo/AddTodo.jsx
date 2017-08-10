import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddTodo extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      task: ''
    };

    this.changeTaskText = this.changeTaskText.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  changeTaskText(e: Event) {
    e.preventDefault();  // optional, not necessary in this case, but for consistency

    this.setState({ task: e.target.value });
  }

  handleKeyPress(e: Event) {
    if (e.key === 'Enter')
      this.submitTask(e);
  }

  submitTask(e: Event) {
    e.preventDefault();  // optional, not necessary in this case, but for consistency

    this.setState({ task: '' });
    this.props.addTodo(this.state.task);
  }

  render() {
    return (
      <div className="form-group row">
        <input 
          className="form-control dark-input"
          type="text"
          onChange={this.changeTaskText}
          onKeyPress={this.handleKeyPress}
          value={this.state.task}
          placeholder="Task text"
        />
        {this.state.task ? <small className="form-text">Press enter to submit todo</small> : null}
      </div>
    );
  }
}

export default AddTodo;