import React, { Component } from "react";
import axios from "axios";

import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";

export default class CreateExercise extends Component {
  state = {
    width_test: "",
    users: [],
    username: "",
    description: "",
    duration: "",
    date: ""
  };
  myInput = React.createRef();

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then(response => {
      console.log(response);
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        });
      }
    });
    this.setState({ width_test: this.myInput.current.offsetWidth });
  }

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
  };

  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeDuration = e => {
    this.setState({ duration: e.target.value });
  };

  onChangeDate = date => {
    this.setState({ date: date });
  };

  onSubmit = e => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add/", exercise)
      .then(res => console.log(res.data));

    this.setState({
      username: ""
    });

    //window.location = "/";
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
        <h3 className="text-primary font-weight-bold">
          Create New Exercise Log
        </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group ">
            <label className="font-weight-bold">Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            >
              {this.state.users.map(function(user) {
                console.log(user);
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Date: </label>
            <div ref={this.myInput}>
              <div style={{ border: "1px solid black" }}>
                <InfiniteCalendar
                  minDate={
                    new Date(2020, new Date().getMonth(), new Date().getDate())
                  }
                  selected={null}
                  width={Number(this.state.width_test)}
                  height={window.innerHeight - 250}
                  rowHeight={70}
                  onSelect={this.onChangeDate}
                  displayOptions={{
                    showMonthsForYears: false,
                    showTodayHelper: false
                  }}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="form-group d-flex justify-content-center">
            <button
              type="submit"
              style={{ letterSpacing: "5px", wordSpacing: "10px" }}
              className="btn btn-primary btn-block text-uppercase"
            >
              Create Exercise Log
            </button>
          </div>
        </form>
      </div>
    );
  }
}
