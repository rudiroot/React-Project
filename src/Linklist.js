import React, { Component } from 'react';
import './Linklist.css';

class Linklist extends Component {
  render() {
    return (
          <a href={this.props.linkadress}>{this.props.linkname} </a>
    );
  }
}

export default Linklist;
