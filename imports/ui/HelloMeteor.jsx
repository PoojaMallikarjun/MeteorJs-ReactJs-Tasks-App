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
    if (this.state.todo === "") {
      return;
    }
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
    const center = {
      textAlign: "center",
    };
    const input = {
      borderRadius: "5px",
      height: "30px",
      width: "250px",
      fontSize: "20px",
      marginTop: "20px",
    };
    const margin = {
      textAlign: "center",
      marginLeft: "5px",
      height: "35px",
      marginBottom: "6px",
    };
    return (
      <div style={center}>
        <input
          style={input}
          onChange={this.handleChange.bind(this)}
          ref="input"
        />
        <button
          style={margin}
          className="btn btn-success"
          onClick={this.handleClick.bind(this)}
        >
          Add
        </button>
        <TodoList />

        <h1>{this.state.todo}</h1>
      </div>
    );
  }
}
