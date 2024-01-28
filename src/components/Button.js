import React, { Component } from 'react';

// This is a simple Button component
// It renders a button with a hover effect
export default class Button extends Component {
  render() {
    return (
      <div>
        {/* The button with the 'button' class for styling */}
        <button className='button'>Hover Over Me !</button>
      </div>
    );
  }
}
