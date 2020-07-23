import React, { Component } from "react";
import TodoList from "./TodoList";

import { todoContainer } from "../api/todos";

export default class HelloMeteor extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChange(e) {
    var todo = e.target.value;
    this.setState({ todo: todo });
  }

  handleClick() {
    var todo = this.state.todo;
    var done = false;
    todoContainer.insert({ todo, done }, (err, done) => {
      console.log(err + " id = " + done);
    });
    this.setState({ todo: "" });
    this.refs.input.value = "";
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} ref="input" />
        <button onClick={this.handleClick.bind(this)}>Add</button>
        <TodoList />

        <h1>{this.state.todo}</h1>
      </div>
    );
  }
}
