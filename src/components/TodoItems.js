import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodoItems extends Component {
  render() {
    console.log("TODO ITEMS Rendered");

    return this.props.entries.map(item => (
      <TodoItem
        item={item}
        key={item.key}
        editItem={this.props.editItem}
        deleteItem={this.props.deleteItem}
        toggleDone={this.props.toggleDone}
      />
    ));
  }
}

export default TodoItems;
