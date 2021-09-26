import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    name: null,
    city: null,
    job: null,
  };
  handleInputs=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e)=>{
   e.preventDefault();
   console.log(this.state);
   this.props.addUer(this.state)
  }
  render() {
    return (
      <div>
          {/* controlled input */}
        <form onSubmit={this.handleSubmit} >
          <input type="text" id="name" onChange={this.handleInputs} placeholder="name"/>
          <input type="text" id="username"   onChange={this.handleInputs} placeholder="username" />
          <input type="text" id="email" onChange={this.handleInputs} placeholder="email" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
