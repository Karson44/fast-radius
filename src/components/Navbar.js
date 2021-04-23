import React, { Component } from "react";
import { HashRouter, Link, withRouter } from "react-router-dom";
import "../styles/navbar.scss";
import enhanceWithClickOutside from "react-click-outside"
import Admin from "../components/Admin";
import { Menu, Search, X, ChevronDown, ChevronUp } from "react-feather";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
      chevron1: false,
      chevron2: false,
      chevron3: false,
    };
  }

  handleClickOutside(){
      this.setState({menu: false})
  }

  render() {
    return (
      <header className="Navbar">
        <div
          className="navbar__items"
          className={
            this.state.menu ? "navbar__items remove-shadow" : "navbar__items"
          }
        >
          <div className="menu">
            {this.state.menu ? (
              <X
                onClick={() => this.setState({ menu: false })}
                color="#05A6DF"
                size="20"
              />
            ) : (
              <Menu
                onClick={() => this.setState({ menu: true })}
                color="#05A6DF"
                size="20"
              />
            )}

            <h2>FAST RADIUS</h2>
          </div>
          <Search color="#05A6DF" size="20" />
        </div>
        <div
          className={this.state.menu ? "dropdown-menu open" : "dropdown-menu"}
        >
          <div className="listitem">
            <h3>ABOUT</h3>
            <div className="about">
              {this.state.chevron1 ? (
                <ChevronUp
                  onClick={() => this.setState({ chevron1: false })}
                  color="#585858"
                  size="15"
                />
              ) : (
                <ChevronDown
                  onClick={() => this.setState({ chevron1: true })}
                  color="#585858"
                  size="15"
                />
              )}
            </div>
          </div>
          <div
            className={
              this.state.chevron1
                ? "dropdown-chevron1 open1"
                : "dropdown-chevron1"
            }
          >
            <div className="sublist">Why Fast Radius?</div>
            <div className="sublist">Leadership</div>
            <div className="sublist">In the News</div>
            <div className="sublist">Careers</div>
            <div className="sublist">FAQ</div>
            <div className="sublist">Contact Us</div>
          </div>

          <div className="listitem">
            <h3>SOLUTIONS</h3>
            <div className="about">
              {this.state.chevron2 ? (
                <ChevronUp
                  onClick={() => this.setState({ chevron2: false })}
                  color="#585858"
                  size="15"
                />
              ) : (
                <ChevronDown
                  onClick={() => this.setState({ chevron2: true })}
                  color="#585858"
                  size="15"
                />
              )}
            </div>
          </div>
          <div
            className={
              this.state.chevron2
                ? "dropdown-chevron2 open2"
                : "dropdown-chevron2"
            }
          >
            <div className="sublist">On-Demand Manufacturing</div>
            <div className="sublist">Additive Launch</div>
            <div className="sublist">Virtual Warehouse</div>
          </div>
          <div className="listitem">
            <h3>CLOUD MANUFACTURING</h3>
          </div>
          <div className="listitem">
            <h3>INDUSTRIES</h3>
            <div className="about">
              {this.state.chevron3 ? (
                <ChevronUp
                  onClick={() => this.setState({ chevron3: false })}
                  color="#585858"
                  size="15"
                />
              ) : (
                <ChevronDown
                  onClick={() => this.setState({ chevron3: true })}
                  color="#585858"
                  size="15"
                />
              )}
            </div>
          </div>
          <div
            className={
              this.state.chevron3
                ? "dropdown-chevron3 open3"
                : "dropdown-chevron3"
            }
          >
            <div className="sublist">Aerospace</div>
            <div className="sublist">Automotive</div>
            <div className="sublist">Consumer Goods</div>
            <div className="sublist">Medical Devices</div>
            <div className="sublist">Robotics</div>
            <div className="sublist">Case Studies</div>
          </div>
          <div className="listitem">
            <h3>RESOURCES</h3>
          </div>
          <div className="portal" onClick={() => this.props.history.push("/admin")}>
            <h3>ADMIN PORTAL</h3>
            <Link to="/admin" />
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(enhanceWithClickOutside(Navbar))
