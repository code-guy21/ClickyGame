import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    clicked: {},
  };

  handleClick = (id) => {
    if (!this.state.clicked[id]) {
      this.setState((prevState) => ({
        score: prevState.score++,
        clicked: {
          ...prevState.clicked,
          [id]: true,
        },
      }));
    } else {
      this.setState((prevState) => ({
        score: 0,
        topScore:
          this.state.score > this.state.topScore
            ? this.state.score
            : this.state.topScore,
        clicked: {},
      }));
    }
  };

  render() {
    return (
      <div className="container-fluid h-100 d-flex flex-column p-0">
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Main updateScore={this.handleClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
