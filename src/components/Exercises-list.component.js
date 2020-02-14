import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Exercise = props => {
  return (
    <tr >
      <td >{props.exercise.username}</td>
      <td >{props.exercise.description}</td>
      <td >{props.exercise.duration}</td>
      <td >{props.exercise.date.substring(0, 10)}</td>
      <td style={{ display: "flex", flexDirection: "column" }}>
        <Link style={{ margin: "5px" }} to={"/edit/" + props.exercise._id}>
          <FontAwesomeIcon style={{color:"blue"}} icon={faEdit} />
        </Link>
        <a
          style={{ margin: "5px" }}
          href="#"
          onClick={() => {
            props.deleteExercise(props.exercise._id)
          }}
        >
          <FontAwesomeIcon style={{color:"red"}} icon={faTrashAlt} />
        </a>
      </td>
    </tr>
  );
};

export default class ExercisesList extends Component {
  state = { exercises: [] };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currentExercise => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

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
        <h3
          style={{
            margin: "10px 0px 20px 0px",
            textTransform: "capitalize",
            letterSpacing: "1px",
            wordSpacing: "2px"
          }}
          className="text-primary font-weight-bold"
        >
          Logged Exercises
        </h3>
        <table style={{ border: "1px dashed black" }} className="table">
          <thead className="thead-dark">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
