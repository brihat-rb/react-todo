import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    console.log("TODOLIST Rendered");

    return (
      <div className="main" align="center">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
              autoFocus
            />
            <button type="submit">Add Task</button>
            <input
              id="search"
              placeholder="Search Tasks . . . "
              onChange={this.props.search}
              // onFocus={(this.input.value = "")}
              // onBlur={this.props.clearsearch}
            />
            <button onClick={this.props.clearsearch}>Clear Search</button>
            Filter
            <select id="filter" onChange={this.props.filter} defaultValue={"0"}>
              <option value="0" />
              <option value="1" className="gbold">
                DONE
              </option>
              <option value="2" className="rbold">
                NOT DONE
              </option>
            </select>
            <button onClick={this.props.clearfilter}>Clear Filter</button>
          </form>
        </div>
        <br />
      </div>
    );
  }
}

export default TodoList;
