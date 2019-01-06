import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                {" "}
                <img src='https://lh3.googleusercontent.com/lzZOrgHRNXsqarUiUf3_jJ_kdES6TVrlaMaqnEfFNu6ucDqrmwwLbnwFFhRqKkI_eSoUTo_PSIBT_w=w489-h488-no'
            alt="Load..."
            style={{ width: '150px'}}
            />



              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
