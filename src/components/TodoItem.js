import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    // console.log(this);
    console.log("TODOITEM Rendered");

    const item_state = this.props.item.state;
    let button;
    let is_done;

    if (item_state === "ndone") {
      button = (
        <button
          onClick={() => this.props.toggleDone(this.props.item.key)}
          className="btn-ndone"
        >
          Done
        </button>
      );
      // spaces equivalent to tick mark
      is_done = "\u2005\u2005\u2004\u0020";
    } else {
      button = (
        <button
          onClick={() => this.props.toggleDone(this.props.item.key)}
          className="btn-done"
        >
          Not Done
        </button>
      );
      // tick mark
      is_done = "\u2714\u0020";
    }

    return (
      <div className="row" state={this.props.item.state}>
        <div className="margin" />
        <div className="column">
          <span className="tick">{is_done}</span>
          <span key={this.props.item.key}>{this.props.item.text}</span>
          <label className="fade">{Date(this.props.item.key)}</label>
        </div>
        <div className="column">
          <button
            onClick={() => this.props.editItem(this.props.item.key)}
            className="btn-edit"
          >
            Edit
          </button>
          <button
            onClick={() => this.props.deleteItem(this.props.item.key)}
            className="btn-delete"
          >
            Delete
          </button>
          {button}
        </div>
      </div>
    );
  }
}

export default TodoItem;
