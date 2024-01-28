import React, { Component } from "react";
import "../tooltip.css";

// Tooltip component for displaying hover content
export default class Tooltip extends Component {
  // Constructor to create the initial state for this class
  constructor() {
    super();
    // Initial state includes default direction and content
    this.state = {
      direction: "my-tooltiptext t-top",
      content: "Hover Content",
    };
  }

  // Function to handle tooltip behavior on hover
  hanldeTooltip = () => {
    // Set content based on the provided props
    this.setState({
      content: this.props.content,
    });

    // Set up direction according to the provided direction prop
    if (this.props.direction === "top") {
      this.setState({
        direction: "my-tooltiptext t-top",
      });
    } else if (this.props.direction === "right") {
      this.setState({
        direction: "my-tooltiptext t-right",
      });
    } else if (this.props.direction === "left") {
      this.setState({
        direction: "my-tooltiptext t-left",
      });
    } else {
      this.setState({
        direction: "my-tooltiptext t-bottom",
      });
    }
  };

  render() {
    return (
      // Wrapper div for binding the component for tooltip
      <div className="my-tooltip" onMouseEnter={this.hanldeTooltip}>
        {/* Span for tooltip text */}
        <span className={this.state.direction}>{this.state.content}</span>
        {/* Component fetched from where it is called */}
        {this.props.children}
      </div>
    );
  }
}
