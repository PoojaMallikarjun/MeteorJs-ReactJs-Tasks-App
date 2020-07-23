import React from "react";
import { todoContainer } from "../api/todos";
import IndividualTodo from "./IndividualTodo";
import FlipMove from "react-flip-move";

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentWillMount() {
    Tracker.autorun(() => {
      var todos = todoContainer.find({}).fetch();
      this.setState({ list: todos });
    });
  }
  render() {
    console.log(todoContainer);
    return (
      <div>
        <FlipMove>
          {this.state.list.map((val, index) => {
            return (
              <IndividualTodo
                done={val.done}
                key={index}
                id={val._id}
                todo={val.todo}
              />
            );
          })}
        </FlipMove>
      </div>
    );
  }
}
