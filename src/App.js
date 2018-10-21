import React, { Component } from "react";

import ShowTime from "./components/ShowTime";
import TodoTitle from "./components/TodoTitle";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: "",
      key: "",
      state: ""
    }
  };

  constructor() {
    console.log("APP Constructor");
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "", state: "" }
    };
  }

  // retrieve todo items from local storage after components have mounted
  componentDidMount() {
    console.log("APP Components Did Mount");

    const items = JSON.parse(localStorage.getItem("todos"));
    if (items !== null) {
      this.setState({ items: items });
    }
  }

  // save todo items to local storage
  saveStateToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.state.items));
    console.log("Saved to local");
  }

  // perform this if there is change in input box
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now(),
      state: "ndone"
    };
    this.setState({ currentItem });
    console.log(typeof new Date(this.state.currentItem.key));
    console.log(Date(this.state.currentItem.key));
  };

  // add a todo item
  addItem = e => {
    e.preventDefault();
    console.log("Add Item");

    const newItem = this.state.currentItem;
    if (this.isUnique(newItem.text)) {
      if (newItem.text !== "") {
        console.log(newItem);
        const items = [...this.state.items, newItem];
        this.setState(
          {
            items: items,
            currentItem: { text: "", key: "", state: "" }
          },
          () => {
            this.saveStateToLocalStorage();
            console.log("New Task Added", newItem.text);
          }
        );
      }
    } else {
      console.log("Duplicate Task found");
      alert("This task already exists");
    }
  };

  // checks if given str is unique
  isUnique(str) {
    const alltodos = this.state.items;
    for (var i = 0; i < alltodos.length; i++) {
      if (alltodos[i].text.toLowerCase() === str.toLowerCase()) {
        return false;
      }
    }
    return true;
  }

  // edit 'this' todo item
  editItem = key => {
    var nname = prompt("Enter new name");
    if (!this.isUnique(nname)) {
      alert("This name already exist");
      return;
    }

    var oname = this.state.items.filter(item => {
      return item.key === key;
    })[0].text;

    this.state.items.filter(item => {
      return item.key === key;
    })[0].text = nname;

    this.setState(this.state.items, () => {
      this.saveStateToLocalStorage();
    });
    console.log("Task ", oname, "updated to ", nname);
  };

  // deletes this todo item
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState(
      {
        items: filteredItems
      },
      () => {
        this.saveStateToLocalStorage();
      }
    );
    console.log("Task Deleted");
  };

  // delete todos
  deleteTodos = option => {
    // 0 - all
    // 1 - not done
    // 2 - done
    if (option === 0) {
      // let resetTodo = [];
      this.setState(
        {
          items: []
        },
        () => {
          this.saveStateToLocalStorage();
        }
      );
    } else if (option === 1) {
      const doneTodos = this.state.items.filter(item => {
        return item.state === "done";
      });
      console.log(doneTodos);
      this.setState(
        {
          items: doneTodos
        },
        () => {
          this.saveStateToLocalStorage();
        }
      );
    } else if (option === 2) {
      let ndoneTodos = this.state.items.filter(item => {
        return item.state === "ndone";
      });
      console.log(ndoneTodos);

      this.setState(
        {
          items: ndoneTodos
        },
        () => {
          this.saveStateToLocalStorage();
        }
      );
    } else {
      console.log("Invalid options");
    }
  };

  // toggles done and not done for 'this' todo item
  toggleDone = key => {
    var to_toggle = this.state.items.filter(item => {
      return item.key === key;
    })[0];

    if (to_toggle.state === "ndone") {
      to_toggle.state = "done";
    } else {
      to_toggle.state = "ndone";
    }

    this.setState(this.state.items, () => {
      this.saveStateToLocalStorage();
    });
    console.log("Task State Toggled");
  };

  // search todos
  search = e => {
    let scount = 0;
    console.log("search", e.target.value);
    // console.log(e.target.value);
    // console.log(document.getElementById("filter").value);
    var filter_state = document.getElementById("filter").value;
    var filter_value = "";

    if (filter_state === "1") {
      filter_value = "done";
    } else if (filter_state === "2") {
      filter_value = "ndone";
    } else {
      filter_value = "";
    }
    // console.log(filter_value);
    var query = e.target.value;
    let todos = document.getElementsByTagName("span");
    for (var i = 0; i < todos.length; i++) {
      var root_todo = todos[i].parentNode.parentNode;
      if (filter_value === "") {
        if (
          !todos[i].textContent.toLowerCase().startsWith(query.toLowerCase())
        ) {
          root_todo.setAttribute("style", "display:none");
        } else {
          scount++;
          root_todo.removeAttribute("style");
        }
      } else {
        if (
          !todos[i].textContent.toLowerCase().startsWith(query.toLowerCase()) ||
          root_todo.getAttribute("state") !== filter_value
        ) {
          root_todo.setAttribute("style", "display:none");
        } else {
          scount++;
          root_todo.removeAttribute("style");
        }
      }
    }
    if (query !== "") {
      document.getElementById("info1").textContent =
        "SEARCH RESULT (" + scount + ")";
    } else {
      document.getElementById("info1").textContent = "";
    }
  };

  // clears search box
  clearsearch = e => {
    e.preventDefault();
    e.target.value = "";
    document.getElementById("search").value = "";
    this.search(e);
    console.log("Search Cleared");
  };

  // filtering todos
  filter = e => {
    // 0 - clear filter
    // 1 - done filter
    // 2 - not done filter
    let filter = Number(e.target.value);
    const query = document.getElementById("search").value;

    let todos = document.getElementsByTagName("span");

    switch (filter) {
      case 0:
        for (let i = 0; i < todos.length; i++) {
          let root_todo = todos[i].parentNode.parentNode;
          if (
            todos[i].textContent.toLowerCase().startsWith(query.toLowerCase())
          ) {
            root_todo.removeAttribute("style");
          } else {
            root_todo.setAttribute("style", "display:none");
          }
        }
        document.getElementById("info2").textContent = "";

        break;

      case 1:
        for (let i = 0; i < todos.length; i++) {
          let root_todo = todos[i].parentNode.parentNode;
          if (
            root_todo.getAttribute("state") !== "done" ||
            !todos[i].textContent.toLowerCase().startsWith(query.toLowerCase())
          ) {
            root_todo.setAttribute("style", "display:none");
          } else {
            root_todo.removeAttribute("style");
          }
        }
        document.getElementById("info2").textContent = "DONE FILTER APPLIED";

        break;
      case 2:
        for (let i = 0; i < todos.length; i++) {
          let root_todo = todos[i].parentNode.parentNode;
          if (
            root_todo.getAttribute("state") !== "ndone" ||
            !todos[i].textContent.toLowerCase().startsWith(query.toLowerCase())
          ) {
            root_todo.setAttribute("style", "display:none");
          } else {
            root_todo.removeAttribute("style");
          }
        }
        document.getElementById("info2").textContent =
          "NOT DONE FILTER APPLIED";
        break;
      default:
    }
  };

  // clears all filter
  clearfilter = e => {
    e.preventDefault();
    e.target.value = 0;
    document.getElementById("filter").value = "0";
    this.filter(e);
    console.log("Filter Cleared");
  };

  // render all components
  render() {
    console.log("APP Rendered");
    return (
      <React.Fragment>
        {/* this shows current time on top center */}

        <div className="App">
          <br />
          {/* title of the app */}
          <div className="sticky-time">
            <ShowTime />
          </div>
          <TodoTitle />
          <div className="sticky-title">
            {/* utilities to add search filter todos */}
            <TodoList
              addItem={this.addItem}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              currentItem={this.state.currentItem}
              search={this.search}
              clearsearch={this.clearsearch}
              filter={this.filter}
              clearfilter={this.clearfilter}
            />
          </div>
          {/* separator */}
          <hr />
          <div className="sticky-count">
            {/* counter for todos: all, not done, and done */}
            <TodoCount
              entries={this.state.items}
              deleteTodos={this.deleteTodos}
            />

            <center>
              <b id="info1" className="bbold" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <b id="info2" className="bbold" />
            </center>
          </div>
          {/* all todos list view with edit, delete, and toggle button */}
          <TodoItems
            key={this.state.items}
            entries={this.state.items}
            editItem={this.editItem}
            deleteItem={this.deleteItem}
            toggleDone={this.toggleDone}
          />
        </div>

        {/* Footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
