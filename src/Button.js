import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const content = "Book It";
    return (
      <button>{content}</button>
    )
  }
}

export default Button;