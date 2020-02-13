import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = { username: "" };

  componentDidMount() {
    this.setState({ username: "" });
  }

  onChangeUserName = e => {
    this.setState({ username: e.target.value.trim() });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username
    };
    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <div
        style={{
          border: "2px solid dark",
          borderRadius: "20px",
          boxShadow: "1px 1px 1px #2c62c7, -1px 0px 5px #449aff",
          padding: "5px 20px",
          margin: "0px 0px 20px 0px"
        }}
      >
        <h2
          style={{
            margin: "10px 0px 20px 0px",
            textTransform: "capitalize",
            letterSpacing: "1px",
            wordSpacing: "2px"
          }}
          className="text-primary font-weight-bold"
        >
          Create New User
        </h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="font-weight-bold">Enter the Username: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Username here!!"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block text-uppercase"
              style={{ letterSpacing: "5.5px" }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}
