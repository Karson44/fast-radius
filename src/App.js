import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import Admin from "./components/Admin";
import Home from "./components/Home";
import routes from "./routes";
import "./styles/app.css";

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div className="App">
        {this.props.location.pathname.includes('admin') ? null : <Navbar />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
