import React, { Component } from 'react';

class Button extends Component {
  render() {
    const content = "Book It";
    return (
      <button>{content}</button>
    )
  }
}

export default Button;