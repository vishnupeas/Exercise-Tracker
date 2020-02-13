import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.component";
import ExercisesList from "./components/Exercises-list.component";
import EditExercise from "./components/Edit-exercises.component";
import CreateExercise from "./components/Create-exercise.component";
import CreateUser from "./components/Create-user.component";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
