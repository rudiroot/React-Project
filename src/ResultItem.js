import React, { Component } from 'react';

class ResultItem extends Component {
  render() {
    return (
      <div className="ResultItem">
        <p>{this.props.song} </p>
      </div>
    )
  }
}

export default ResultItem;
