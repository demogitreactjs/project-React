import React, { Component } from "react";
import axios from "axios";
import ChildCompo from "./ChildCompo";
import "./App.css";
import AddUser from "./AddUser";
import { Route, Switch } from "react-router-dom";
import User from "./User";

class App extends Component {
  //constuctor
  constructor() {
    super();
    //state object
    this.state = {
      // data: [
      //   { name: "ravi", job: "sw1", city: "hyd1", id: 1 },
      //   { name: "rav2i", job: "sw2", city: "hyd2", id: 2 },
      //   { name: "ravi3", job: "sw3", city: "hyd3", id: 3 },
      // ],
      // istrue:false
      users: [],
    };
  }
  async componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({
    //   users
    // }))
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = result.data;
    this.setState({
      users,
    });
  }

  deleteHandler = (id) => {
    const newArr = this.state.users.filter((person) => person.id !== id);
    this.setState({ users: newArr });
  };
  addUer = (user) => {
    user.id = Math.random();
    const newArr = [...this.state.users, user];
    this.setState({
      users: newArr,
    });
    console.log(user);
  };
  render() {
    return (
      <div>
        <AddUser addUer={this.addUer} />
        <div className="App">
          {/* {this.state.istrue? <h1>Helo world</h1>:null }
          <button onClick={() => this.setState({ istrue: !this.state.istrue })}>
            Toggle
          </button> */}
          <Switch>
            <Route exact path="/">
              <ChildCompo users={this.state.users} click={this.deleteHandler} />
            </Route>
            <Route path="/:id"  component={User}>
              
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
