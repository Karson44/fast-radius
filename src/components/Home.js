import React, { Component } from "react";
import { HashRouter, Link, withRouter } from "react-router-dom";
import "../styles/home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro">
          MANUFACTURING SO SMART AND EASY, ANYTHING IS POSSIBLE.
        </div>
        <p className="cloud">Powered by Cloud Manufacturing</p>
        <div
          className="quote"
          onClick={() => this.props.history.push("/quote")}
        >
          START YOUR QUOTE
          <Link to="/quote"/>
        </div>
        <div className="adminhelp">TALK TO SOMEONE</div>
        <img src="eifeltower.jpg" alt="Eifel Tower" className="tower"></img>
      </div>
    );
  }
}
