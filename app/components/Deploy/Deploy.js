import React, { Component } from 'react';
import Radium from 'radium';

class Deploy extends Component {
  render() {
    return (
      <button>{this.props.environment}</button>
    )
  }
};

export default Deploy;
