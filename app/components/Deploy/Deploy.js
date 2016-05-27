import React, { Component } from 'react';
import Radium from 'radium';

class Deploy extends Component {

  handleClick() {
    fetch('/staging', {
      method: 'POST',
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.environment}</button>
    )
  }
};

export default Deploy;



// handleClick
// takes the contnet and the desired env
// fires push to External
// which fires a fetch...