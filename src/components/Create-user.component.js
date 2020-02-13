import React, { Component } from "react";

export default class CreateUser extends Component {
  state = { username: "" };

  componentDidMount() {
    this.setState({ username: "new_username" });
  }

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username
    };
    console.log(user);

    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Enter the Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
  }
}
