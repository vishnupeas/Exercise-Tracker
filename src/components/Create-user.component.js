import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = { username: "" };

  componentDidMount() {
    this.setState({ username: "new_username" });
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
          border: "1px solid black",
          padding: "5px 20px",
          marginBottom: "20px"
        }}
      >
        <h2 className="text-primary font-weight-bold">Create New User</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="font-weight-bold">Enter the Username: </label>
            <input
              type="text"
              className="form-control"
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
