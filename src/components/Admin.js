import React, { Component } from "react";
import { User } from "react-feather";
import "../styles/admin.scss";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
        username: '',
        password: ''
    };
  }
  render() {
    return (
      <div className="Admin">
        <div className="login-box">
          <div className="blue-circle">
            <User color="white" size="35" />
          </div>
          <h2>Admin Login</h2>
          <input placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />
          <input placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} type="password"/>
          <button>Login</button>
          <p>
            Create an admin account?
            <a>Click Here</a>
          </p>
        </div>
      </div>
    );
  }
}
