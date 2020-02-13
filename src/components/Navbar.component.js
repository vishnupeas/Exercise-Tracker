import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          border: "2px solid dark",
          borderRadius: "20px",
          boxShadow: "1px 1px 1px #2c62c7, -1px 1px 5px #449aff"
        }}
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <Link className="navbar-brand text-primary font-weight-bold" to="/">
          Exercise-Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className="nav-item active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/">
                Exercises<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/create">
                Create Exercise Log
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/user">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
