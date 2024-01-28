import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Tooltip from "./components/Tooltip";

// App component to demonstrate Tooltip usage
export default class App extends Component {
  // Constructor to create the initial state for this class
  constructor() {
    super();
    // Initial state includes default direction and content for the Tooltip
    this.state = {
      direction: "top",
      content: "Thanks for hovering! I'm a tooltip",
    };
  }

  // Function to handle input content for hover
  handleContentInput = (e) => {
    // Log the input value to the console
    console.log(e.target.value);
    // Update the content state based on the input value
    if (e.target.value.length > 0) {
      this.setState({
        content: e.target.value,
      });
    } else {
      // If the input value is empty, set a default content
      this.setState({
        content: "Thanks for hovering! I'm a tooltip",
      });
    }
  };

  // Function to handle direction according to select option
  handleDirectionInput = (e) => {
    // Log the selected direction to the console
    console.log(e.target.value);
    // Update the direction state based on the selected option
    this.setState({
      direction: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        {/* Section for Input Value to Change Direction & Content of Tooltip */}
        <div>
          {/* Heading */}
          <h1>Tooltip</h1>
          {/* Input field for content */}
          <div className="form-div">
            <label className="form-label">Enter Content of Tooltip</label>
            <input
              type="text"
              className="form-control"
              onKeyUp={this.handleContentInput}
            />
          </div>
          {/* Dropdown for direction selection */}
          <div className="form-div">
            <label>Enter Direction of Tooltip</label>
            <select
              className="form-select"
              onChange={this.handleDirectionInput}
            >
              <option value="top">Top</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
        </div>

        {/* Tooltip Component */}
        {/* To use tooltip, you have to bind a component inside the Tooltip */}
        <Tooltip content={this.state.content} direction={this.state.direction}>
          {/* Calling the Button component */}
          <Button />
        </Tooltip>
      </div>
    );
  }
}
