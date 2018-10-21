import React, { Component } from "react";
import "./TodoList.css";

class TodoCount extends Component {
  render() {
    console.log("TodoCount rendered");
    var ntodo = this.props.entries.length;

    var done_count = this.props.entries.filter(item => {
      return item.state === "done";
    }).length;

    var ndone_count = this.props.entries.filter(item => {
      return item.state === "ndone";
    }).length;

    return (
      <div>
        <center>
          <b>
            TASKS
            <div className="black">
              <thinking onClick={() => this.props.deleteTodos(0)}>
                .:
                {ntodo}
                :.
              </thinking>
            </div>
          </b>
          <b className="rbold">
            TODO{" "}
            <thinking onClick={() => this.props.deleteTodos(1)}>
              .:
              {ndone_count}
              :.
            </thinking>
          </b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b className="gbold">
            DONE{" "}
            <thinking onClick={() => this.props.deleteTodos(2)}>
              .:
              {done_count}
              :.
            </thinking>
          </b>
          {/* <br /> */}
          <br />
        </center>
      </div>
    );
  }
}

export default TodoCount;
